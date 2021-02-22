import React, {useEffect} from "react";
import {
    Grid,
    Typography,
    createMuiTheme,
    responsiveFontSizes,
    makeStyles,
} from "@material-ui/core";
import "./Glimpses.css";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
    gutterBottom: {
        marginBottom: "0.6em",
    },
});

function Glimpses() {
    useEffect(()=>{
        window.jQuery("#nanogallery").nanogallery2({

            // CONTENT SOURCE
            // The optional add-on nanoPhotosProvider is used for this example - this is not mandatory and can easily be replaced by a list of medias
            kind: 'nano_photos_provider2',
            dataProvider: 'https://pict.acm.org/gallery/nano_photos_provider2.php',

            // GALLERY AND THUMBNAIL LAYOUT
            galleryMosaic : [                       // default layout
                { w: 2, h: 2, c: 1, r: 1 },
                { w: 1, h: 1, c: 3, r: 1 },
                { w: 1, h: 1, c: 3, r: 2 },
                { w: 1, h: 2, c: 4, r: 1 },
                { w: 2, h: 1, c: 5, r: 1 },
                { w: 2, h: 2, c: 5, r: 2 },
                { w: 1, h: 1, c: 4, r: 3 },
                { w: 2, h: 1, c: 2, r: 3 },
                { w: 1, h: 2, c: 1, r: 3 },
                { w: 1, h: 1, c: 2, r: 4 },
                { w: 2, h: 1, c: 3, r: 4 },
                { w: 1, h: 1, c: 5, r: 4 },
                { w: 1, h: 1, c: 6, r: 4 }
            ],
            galleryMosaicXS : [                     // layout for XS width
                { w: 2, h: 2, c: 1, r: 1 },
                { w: 1, h: 1, c: 3, r: 1 },
                { w: 1, h: 1, c: 3, r: 2 },
                { w: 1, h: 2, c: 1, r: 3 },
                { w: 2, h: 1, c: 2, r: 3 },
                { w: 1, h: 1, c: 2, r: 4 },
                { w: 1, h: 1, c: 3, r: 4 }
            ],
            galleryMosaicSM : [                     // layout for SM width
                { w: 2, h: 2, c: 1, r: 1 },
                { w: 1, h: 1, c: 3, r: 1 },
                { w: 1, h: 1, c: 3, r: 2 },
                { w: 1, h: 2, c: 1, r: 3 },
                { w: 2, h: 1, c: 2, r: 3 },
                { w: 1, h: 1, c: 2, r: 4 },
                { w: 1, h: 1, c: 3, r: 4 }
            ],
            galleryMaxRows: 1,
            galleryDisplayMode: 'rows',
            gallerySorting: 'random',
            thumbnailDisplayOrder: 'random',

            thumbnailHeight: '180', thumbnailWidth: '220',
            thumbnailAlignment: 'scaled',
            thumbnailGutterWidth: 0, thumbnailGutterHeight: 0,
            thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

            thumbnailToolbarImage: null,
            thumbnailToolbarAlbum: null,
            thumbnailLabel: { display: false },

            // DISPLAY ANIMATION
            // for gallery
            galleryDisplayTransitionDuration: 1500,
            // for thumbnails
            thumbnailDisplayTransition: 'imageSlideUp',
            thumbnailDisplayTransitionDuration: 1200,
            thumbnailDisplayTransitionEasing: 'easeInOutQuint',
            thumbnailDisplayInterval: 60,

            // THUMBNAIL HOVER ANIMATION
            thumbnailBuildInit2: 'image_scale_1.15',
            thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
            touchAnimation: true,
            touchAutoOpenDelay: 500,

            // LIGHTBOX
            viewerToolbar: { display: false },
            viewerTools:    {
                topLeft:   'label',
                topRight:  'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
            },

            // GALLERY THEME
            galleryTheme : {
                thumbnail: { background: '#111' },
            },

            // DEEP LINKING
            locationHash: true
        });

    })
    const classes = useStyles();
    return (
        <Grid container direction="column" style={{zIndex: 10}}>
            <Grid item container>
                <div className="heroText">
                    <Grid item xs={0} sm={2}/>
                    <Grid item xs={12}>
                        <Typography
                            className={classes.text}
                            variant="h3"
                            style={{
                                fontFamily: "Segoe UI",
                                textAlign: "center",
                            }}
                            gutterBottom
                        >
                            Glimpses of previous years
                        </Typography>
                    </Grid>
                    <Grid item xs={0} sm={2}/>
                </div>
            </Grid>
            <div id="nanogallery"></div>

        </Grid>
    );
}

export default Glimpses;