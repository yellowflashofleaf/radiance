import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import "./Glimpses.css";

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
      galleryMaxRows: 300, // gallery with max 3 rows
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
        bottomRight: "",
      },

      // DISPLAY ANIMATION
      thumbnailDisplayTransition: "flipUp", // thumbnail display animation
      thumbnailDisplayTransitionDuration: 400,
      thumbnailDisplayInterval: 200,
      thumbnailDisplayOrder: "rowByRow",
      thumbnailLLabel: {
        display: false,
        position: "overImageOnTop",
        hideIcons: true,
        titleFontSize: "1.5em",
        align: "left",
      },

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
  return (
    <Grid container direction="column" style={{ zIndex: 10 }}>
      <Grid item container>
        <div className="text-center mb-5" style={{ width: "100vw" }}>
          <div className="page-title ml-auto mr-auto">
            GLIMPSES OF RADIANCE'19
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
