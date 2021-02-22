import React, { useEffect } from "react";
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
  useEffect(() => {
    window.jQuery("#nanogallery").nanogallery2({
      // CONTENT SOURCE
      // The optional add-on nanoPhotosProvider is used for this example - this is not mandatory and can easily be replaced by a list of medias
      kind: "nano_photos_provider2",
      dataProvider: "https://pict.acm.org/gallery/nano_photos_provider2.php",
      album: "0",
      // GALLERY AND THUMBNAIL LAYOUT
      thumbnailHeight: "250",
      thumbnailWidth: "auto",
      // galleryDisplayMode: 'pagination',                 // gallery pagination mode
      galleryMaxRows: 3000, // gallery with max 3 rows
      gallerySorting: "random",
      thumbnailAlignment: "fillWidth",
      thumbnailL1GutterWidth: 20,
      thumbnailL1GutterHeight: 20,
      thumbnailBorderHorizontal: 1,
      thumbnailBorderVertical: 1,

      // THUMBNAIL TOOLS & LABEL
      thumbnailL1Label: {
        display: false,
        position: "overImageOnTop",
        hideIcons: true,
        titleFontSize: "1.5em",
        align: "left",
      },
      thumbnailToolbarImage: {
        topLeft: "select",
        bottomRight: "featured,display,download,info,cart",
      },

<<<<<<< HEAD
      // DISPLAY ANIMATION
      thumbnailDisplayTransition: "flipUp", // thumbnail display animation
      thumbnailDisplayTransitionDuration: 400,
      thumbnailDisplayInterval: 200,
      thumbnailDisplayOrder: "rowByRow",
=======
            // THUMBNAIL TOOLS & LABEL
            thumbnailL1Label: { display: false, position:'overImageOnTop', hideIcons: true, titleFontSize: '1.5em', align: 'left'},
>>>>>>> a277bcdf07744c81b36d4043bcdc4bf3886d7778

      // THUMBNAIL'S HOVER ANIMATION
      thumbnailHoverEffect2: "toolsSlideUp|labelSlideDown",
      touchAnimation: true,
      touchAutoOpenDelay: -1,

      // GALLERY THEME
      galleryTheme: {
        thumbnail: {
          titleShadow: "none",
          descriptionShadow: "none",
          titleColor: "#fff",
          borderColor: "#fff",
        },
        navigationPagination: {
          background: "#3C4B5B",
          color: "#fff",
          colorHover: "#aaa",
          borderRadius: "4px",
        },
      },

      // callback to customize the content of the media info popup

      // DEEP LINKING
      locationHash: false,
    });

    // Function called before the popup for media info is displayed
    // Content and title can be changed
  });
  const classes = useStyles();
  return (
    <Grid container direction="column" style={{ zIndex: 10 }}>
      <Grid item container>
        <div className="text-center my-5" style={{ width: "100vw" }}>
          <div className="page-title ml-auto mr-auto">
            Glimpses of Pulzion'19
          </div>
        </div>
      </Grid>
      <div className="px-5">
        <div id="nanogallery"></div>
      </div>
    </Grid>
  );
}

export default Glimpses;
