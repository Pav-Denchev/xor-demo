import React from 'react';
import './App.css';
import './textLayer';
import { TextLayer } from "./textLayer";
import Resizer from "react-image-file-resizer";
import * as htmlToImage from "html-to-image";
import { Button, CircularProgress, TextField } from '@mui/material';
import { AlphaPicker } from 'react-color';

export class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.state = {
            threshhold: 0,
            letters: [],
            backgroundImage: null,
            loading: false,
            imageLoaded: false,
            opacity: 1,
        };
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

    calcAbsolutePixel = (pixel, pixel1, pixel2) => {
        const absR = Math.abs(Math.abs(pixel.r - pixel1.r) - pixel2.r);
        const absG = Math.abs(Math.abs(pixel.g - pixel1.g) - pixel2.g);
        const absB = Math.abs(Math.abs(pixel.b - pixel1.b) - pixel2.b);

        return {
            r: absR,
            g: absG,
            b: absB
        };
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
                let newLetters = new Array(24);
                for (var h = 0; h < newLetters.length; h++) {
                    newLetters[h] = new Array(24);
                }
                const height = 1300;
                const width = 1000;
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

                for (let row = 0; row < 24; row++) {
                    for (let col = 0; col < 24; col++) {
                        let belowThreshhold = false;
                        let darkestPixel = {
                            row,
                            col,
                            x: currRowPxCount,
                            y: currColPxCount,
                            grayscale: 255,
                        };
                        for (let m = 0; m < Math.round(cellPxWidth); m++) {
                            for (let n = 0; n < Math.round(cellPxHeight); n++) {
                                const pixel2 = this.getPx(imageData2, Math.round(currRowPxCount + m), Math.round(currColPxCount + n));

                                if ((pixel2.r !== 0 && pixel2.g !== 0 && pixel2.b !== 0) && (pixel2.r !== 255 && pixel2.g !== 255 && pixel2.b !== 255)) {
                                    continue;
                                }

                                const pixel = this.getPx(imageData, Math.round(currRowPxCount + m), Math.round(currColPxCount + n));
                                const pixel1 = this.getPx(imageData1, Math.round(currRowPxCount + m), Math.round(currColPxCount + n));

                                const absPixel = this.calcAbsolutePixel(pixel, pixel1, pixel2);

                                const grayscale = this.rgbToGrayscale(absPixel.r, absPixel.g, absPixel.b);

                                if (grayscale < darkestPixel.grayscale) {
                                    darkestPixel = {
                                        row,
                                        col,
                                        x: currRowPxCount + m,
                                        y: currColPxCount + n,
                                        grayscale
                                    }
                                }

                                if (parseInt(grayscale) <= parseInt(this.state.threshhold)) {
                                    belowThreshhold = true;
                                    newLetters[row][col] = '~';
                                    break;
                                } else {
                                    newLetters[row][col] = this.state.letters[row][col];
                                }
                            }
                            if (belowThreshhold) {
                                break;
                            }
                        }
                        console.log(darkestPixel);
                        currRowPxCount += cellPxWidth;
                    }
                    currRowPxCount = padding;
                    currColPxCount += cellPxHeight;
                }
                resolve(newLetters);
            }).catch(() => {
                reject();
            });
        })
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
            a = parseInt(str32.substr(0, 2), 16);
            b = parseInt(str32.substr(2, 2), 16);
            g = parseInt(str32.substr(4, 2), 16);
            r = parseInt(str32.substr(6, 2), 16);
        }

        return {
            r: r,
            g: g,
            b: b,
            a: a,
        };
    };

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
                        const letters = this.getRandomLetters();
                        this.setState({ backgroundImage: uri, letters: letters });
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

    getRandomLetter = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', flexDirection: 'column', paddingTop: '10px', paddingBottom: '10px', }} className="App">
                <div style={{ marginBottom: '10px' }}>
                    <input type={"file"} id={'imageUpload'} name={'imageUpload'} onChange={this.fileChangedHandler} />
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='image' style={{ width: '1000px', height: '1300px', position: 'relative' }}>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <img alt={""} style={{ width: '1000px', height: '1300px', }} src={this.state.backgroundImage} />
                        </div>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <div style={{ width: '100%', height: '100%', fontFamily: 'Motiva' }}>
                                <TextLayer letters={this.state.letters} opacity={this.state.opacity} />
                            </div>
                        </div>
                    </div>
                    <div className='image1' style={{ width: '1000px', height: '1300px', position: 'relative', display: `${this.state.loading ? 'block' : 'none'}` }}>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <img alt={""} style={{ width: '1000px', height: '1300px', }} src={this.state.backgroundImage} />
                        </div>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <div style={{ width: '100%', height: '100%', fontFamily: 'Motiva' }}>
                                <TextLayer letters={this.state.letters} opacity={this.state.opacity} />
                            </div>
                        </div>
                    </div>
                    <div className='image2' style={{ width: '1000px', height: '1300px', position: 'relative', backgroundColor: 'white', display: `${this.state.loading ? 'block' : 'none'}` }}>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <div style={{ width: '100%', height: '100%', fontFamily: 'Motiva' }}>
                                <TextLayer letters={this.state.letters} opacity={this.state.opacity} />
                            </div>
                        </div>
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
                <div style={{ position: 'relative', width: '316px', height: '16px', marginTop: '10px' }}>
                    <AlphaPicker
                        color={{ h: 250, s: 0, l: 0.2, a: this.state.opacity }}
                        onChange={(value) => {
                            const opacity = value.rgb.a;
                            this.setState({ opacity });
                        }}
                    />
                </div>
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
