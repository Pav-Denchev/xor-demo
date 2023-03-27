import React from 'react';
import './App.css';
import './textLayer';
import { TextLayer } from "./textLayer";
import Resizer from "react-image-file-resizer";
import { ChromePicker } from "react-color";
import * as htmlToImage from "html-to-image";
import { Button, CircularProgress, TextField } from '@mui/material';

export class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.state = {
            threshhold: 0,
            letters: [],
            selectedItem: 0,
            backgroundImage: null,
            fontDarkColor: { hex: '#000000', rgb: { r: 0, g: 0, b: 0 } },
            fontLightColor: { hex: '#ffffff', rgb: { r: 255, g: 255, b: 255 } },
            showDarkColorPicker: false,
            showLightColorPicker: false,
            targetBrightness: 127,
            loading: false,
            imageLoaded: false,
        };
    }

    componentDidMount() {
        const letters = this.getRandomLetters();
        this.setState({ fontDarkColor: { hex: '#000000', rgb: { r: 0, g: 0, b: 0 } }, letters: letters });
    }

    getRandomLetters = () => {
        const letters = []
        for (let i = 0; i < 24; i++) {
            const row = [];
            for (let j = 0; j < 24; j++) {
                row.push(this.getRandomLetter());
            }
            letters.push(row);
        }
        return letters
    }

    rgbToGrayscale = (r, g, b) => {
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    calcGrayscalePixel = (pixel, pixel1, pixel2) => {
        const absR = Math.abs(Math.abs(pixel.r - pixel1.r) - pixel2.r);
        const absG = Math.abs(Math.abs(pixel.g - pixel1.g) - pixel2.g);
        const absB = Math.abs(Math.abs(pixel.b - pixel1.b) - pixel2.b);

        const grayscalePixel = this.rgbToGrayscale(absR, absG, absB);

        return grayscalePixel;
    };

    blockCellsBelowThreshhold = async () => {
        return new Promise(async (resolve, reject) => {
            const imageHtml = document.querySelector(".image");
            const image1Html = document.querySelector(".image1");
            const image2Html = document.querySelector(".image2");

            const imageBase64 = await htmlToImage.toPng(imageHtml, { quality: 1 });
            const image1Base64 = await htmlToImage.toPng(image1Html, { quality: 1 });
            const image2Base64 = await htmlToImage.toPng(image2Html, { quality: 1 });

            const imageUrls = [imageBase64, image1Base64, image2Base64];

            Promise.all(imageUrls.map(e =>
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = e;
                })
            )).then((result) => {
                const image = result[0];
                const image1 = result[1];
                const image2 = result[2];
                let letters = [...this.state.letters];
                const height = 624;
                const width = 480;
                const padding = 0;
                const cellPxHeight = (height - (padding * 2)) / 24;
                const cellPxWidth = (width - (padding * 2)) / 24;

                const canvas = document.createElement('canvas');
                const canvas1 = document.createElement('canvas');
                const canvas2 = document.createElement('canvas');

                canvas.width = width;
                canvas.height = height;

                canvas1.width = width;
                canvas1.height = height;

                canvas2.width = width;
                canvas2.height = height;

                const context = canvas.getContext('2d');
                const context1 = canvas1.getContext('2d');
                const context2 = canvas2.getContext('2d');

                context.drawImage(image, 0, 0, width, height);
                context1.drawImage(image1, 0, 0, width, height);
                context2.drawImage(image2, 0, 0, width, height);

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
                const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);

                let currRowPxCount = padding;
                let currColPxCount = padding;

                for (let r = 0; r < 24; r++) {
                    for (let c = 0; c < 24; c++) {
                        let overThreshold = false;
                        for (let m = 0; m < Math.round(cellPxWidth); m++) {
                            for (let n = 0; n < Math.round(cellPxHeight); n++) {
                                var pixel = this.getPx(imageData, Math.round(currRowPxCount + m), Math.round(currColPxCount + n));
                                var pixel1 = this.getPx(imageData1, Math.round(currRowPxCount + m), Math.round(currColPxCount + n));
                                var pixel2 = this.getPx(imageData2, Math.round(currRowPxCount + m), Math.round(currColPxCount + n));

                                const grayscale = this.calcGrayscalePixel(pixel, pixel1, pixel2);

                                if (grayscale <= this.state.threshhold) {
                                    overThreshold = true;
                                    letters[r][c] = '`';
                                    break;
                                }
                            }
                            if (overThreshold) {
                                break;
                            }
                        }
                        currRowPxCount += cellPxWidth;
                    }
                    currRowPxCount = padding;
                    currColPxCount += cellPxHeight;
                }

                resolve(letters);
            }).catch(() => {
                reject();
            });
        })
    };

    processImage = (base64) => {

        let brightnessMatrix = new Array(24);
        for (var h = 0; h < brightnessMatrix.length; h++) {
            brightnessMatrix[h] = new Array(24);
        }

        var image = new Image();
        image.src = base64;
        image.onload = () => {

            var canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            var context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, 556, 696);
            let cellsContrast = [];
            var imageData = context.getImageData(38, 34, canvas.width - 76, canvas.height - 72);
            for (let i = 0; i < 480; i = i + 20) {
                for (let j = 0; j < 624; j = j + 26) {
                    // analyzing a cell (getting average grayscale value of cell)
                    var pixels = [];
                    for (let m = 0; m < 20; m++) {
                        for (let n = 0; n < 26; n++) {
                            pixels.push(this.getPx(imageData, i + m, j + n));

                        }
                    }
                    let cellBrightnessAverage = pixels.reduce((partialSum, pixel) => partialSum + this.rgb2grayscale(pixel.r, pixel.g, pixel.b), 0) / pixels.length;

                    brightnessMatrix[Math.floor(i / 20)][Math.floor(j / 26)] = cellBrightnessAverage;
                    cellsContrast.push(this.contrastCalc(this.state.targetBrightness, cellBrightnessAverage));
                }
            }
            this.setState({ brightnessMatrix: brightnessMatrix, cellsContrast: cellsContrast });
        }
    };

    median = (arr) => {
        if (arr.length === 0) {
            return; // 0.
        }
        arr.sort((a, b) => a - b); // 1.
        const midpoint = Math.floor(arr.length / 2); // 2.
        return arr.length % 2 === 1 ?
            arr[midpoint] : // 3.1. If odd length, just take midpoint
            (arr[midpoint - 1] + arr[midpoint]) / 2; // 3.2. If even length, take median of midpoints
    };

    getPx = (imageData, x, y) => {
        var data32 = new Uint32Array(imageData.data.buffer),
            val32 = data32[y * imageData.width + x],
            str32,
            a = 0,
            b = 0,
            g = 0,
            r = 0;

        if (val32 > 0) {
            str32 = val32.toString(16);
            r = parseInt(str32.substr(0, 2), 16);
            g = parseInt(str32.substr(2, 2), 16);
            b = parseInt(str32.substr(4, 2), 16);
            a = parseInt(str32.substr(6, 2), 16);
        }

        return {
            r: r,
            g: g,
            b: b,
            a: a,
        };
    };

    rgb2grayscale = (r, g, b) => { return 0.3 * r + 0.587 * g + 0.113 * b };

    fileChangedHandler(event) {
        var fileInput = false;
        if (event.target.files[0]) {
            fileInput = true;
        }
        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    event.target.files[0],
                    556,
                    696,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        this.setState({ backgroundImage: uri });
                        this.processImage(uri);
                    },
                    "base64",
                    556,
                    696
                );
                this.setState({ imageLoaded: true });
            } catch (err) {
                console.log(err);
            }
        }
    }

    handleChangeFontDarkColor = (color) => {
        this.setState({ fontDarkColor: color });
    };

    handleChangeFontLightColor = (color) => {
        this.setState({ fontLightColor: color });
    };

    onTargetBrightnessChange = (e) => {
        let targetBrightness = e.target.value;
        let cellsContrast = [];
        let cells = this.state.brightnessMatrix;

        if (cells) {
            cells.forEach(column => {
                column.forEach(cell => {
                    cellsContrast.push(this.contrastCalc(targetBrightness, cell))
                })
            });
        }

        this.setState({ cellsContrast: cellsContrast, targetBrightness: targetBrightness });
    };

    contrastCalc = (fontBrightness, backgroundBrightness) => {
        if (fontBrightness > backgroundBrightness) return ((fontBrightness / 255 + 0.05) / (backgroundBrightness / 255 + 0.05));
        return ((backgroundBrightness / 255 + 0.05) / (fontBrightness / 255 + 0.05));
    };

    getAverageContrast = () => {
        let cellsContrast = this.state.cellsContrast;
        return cellsContrast && Math.round(cellsContrast.reduce((partialSum, a) => partialSum + a, 0) / cellsContrast.length * 1000) / 1000;
    };

    getRandomLetter = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', flexDirection: 'column' }} className="App">
                <div style={{ marginBottom: '10px' }}>
                    <input type={"file"} id={'imageUpload'} name={'imageUpload'} onChange={this.fileChangedHandler} />
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='image' style={{ width: '480px', height: '624px', position: 'relative' }}>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <img alt={""} style={{ width: '480px', height: '624px' }} src={this.state.backgroundImage} />
                        </div>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <div style={{ width: '100%', height: '100%', fontFamily: 'Motiva' }}>
                                <TextLayer useKr={true} letters={this.state.letters} brightnessMatrix={this.state.brightnessMatrix} targetBrightness={this.state.targetBrightness} fontLightColor={this.state.fontLightColor} fontDarkColor={this.state.fontDarkColor} />
                            </div>
                        </div>
                    </div>
                    <div className='image1' style={{ width: '480px', height: '624px', position: 'relative', display: `${this.state.loading ? 'block' : 'none'}` }}>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <img alt={""} style={{ width: '480px', height: '624px' }} src={this.state.backgroundImage} />
                        </div>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <div style={{ width: '100%', height: '100%', fontFamily: 'Motiva' }}>
                                <TextLayer letters={this.state.letters} brightnessMatrix={this.state.brightnessMatrix} targetBrightness={this.state.targetBrightness} fontLightColor={this.state.fontLightColor} fontDarkColor={this.state.fontDarkColor} />
                            </div>
                        </div>
                    </div>
                    <div className='image2' style={{ width: '480px', height: '624px', position: 'relative', backgroundColor: 'white', display: `${this.state.loading ? 'block' : 'none'}` }}>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <div style={{ width: '100%', height: '100%', fontFamily: 'Motiva' }}>
                                <TextLayer letters={this.state.letters} brightnessMatrix={this.state.brightnessMatrix} targetBrightness={this.state.targetBrightness} fontLightColor={this.state.fontLightColor} fontDarkColor={this.state.fontDarkColor} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row-reverse', justifyContent: 'center' }}>
                        <div style={{ width: '20px', height: '20px', border: '1px solid', backgroundColor: this.state.fontLightColor.hex }} onClick={() => { this.setState({ showLightColorPicker: !this.state.showLightColorPicker, showDarkColorPicker: false }) }}>
                        </div>
                        <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
                            {this.state.showLightColorPicker ? <ChromePicker width={'200px'} height={'200px'} disableAlpha={true} color={this.state.fontLightColor} onChangeComplete={this.handleChangeFontLightColor} /> : null}
                        </div>
                        <div>
                            <input style={{ width: '500px' }}
                                type='range'
                                onChange={this.onTargetBrightnessChange}
                                min={0}
                                max={255}
                                step={1}
                                value={this.state.targetBrightness}
                                className='custom-slider'>
                            </input>
                        </div>

                        <div style={{ width: '20px', height: '20px', border: '1px solid', backgroundColor: this.state.fontDarkColor.hex }} onClick={() => { this.setState({ showDarkColorPicker: !this.state.showDarkColorPicker, showLightColorPicker: false }) }}>
                        </div>
                        <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
                            {this.state.showDarkColorPicker ? <ChromePicker width={'200px'} height={'200px'} disableAlpha={true} color={this.state.fontDarkColor} onChangeComplete={this.handleChangeFontDarkColor} /> : null}
                        </div>

                    </div>
                    <div>
                        {this.state.targetBrightness} <b>Kr</b>
                    </div>
                    <div>
                        {this.getAverageContrast() ? 'Average Contrast: ' + this.getAverageContrast() : ''}
                    </div>
                </div>
                {
                    this.state.loading && (
                        <div style={{ backgroundColor: 'white', zIndex: 999, position: 'absolute', width: '100%', height: '100%' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <CircularProgress />
                            </div>
                        </div>
                    )
                }
                <TextField
                    margin='normal'
                    type="number"
                    id="outlined-basic"
                    label="Threshhold"
                    variant="outlined"
                    value={this.state.threshhold}
                    onChange={(event) => {
                        if (event.target.value >= 0 && event.target.value <= 255) {
                            this.setState({ threshhold: event.target.value });
                        }
                    }}
                />
                <div style={{ display: 'flex' }}>
                    <Button
                        style={{ marginRight: 5 }}
                        onClick={async () => {
                            this.setState({ loading: true });
                            const result = await this.blockCellsBelowThreshhold();
                            this.setState({ loading: false, letters: result });
                        }}
                        variant='outlined'
                        disabled={!this.state.imageLoaded}
                    >
                        Block cells
                    </Button>
                    <Button
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                            const result = this.getRandomLetters();
                            this.setState({ letters: result });
                        }}
                        variant='outlined'
                    >
                        Reset
                    </Button>
                </div>
            </div>
        )
    }
}
