var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "735",
                    "DialogWidth": "921"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "756",
                    "ToolBoxButtonY": "36",
                    "previewPlugins": "stage_key_thumbnail,audiothumbnail,blenderthumbnail,comicbookthumbnail,debthumbnailer,djvuthumbnail,ebookthumbnail,marble_thumbnail_shp,exrthumbnail,directorythumbnail,fontthumbnail,marble_thumbnail_geojson,pothumbnail,marble_thumbnail_gpx,imagethumbnail,jpegthumbnail,karbon_karbon1x_thumbnail,marble_thumbnail_kmz,marble_thumbnail_kml,stage_kpr_thumbnail,kraorathumbnail,sheets_xlsx_thumbnail,sheets_excel_thumbnail,stage_pptx_thumbnail,stage_powerpoint_thumbnail,windowsexethumbnail,windowsimagethumbnail,words_docx_thumbnail,words_msword_thumbnail,words_wps_thumbnail,mltpreview,mobithumbnail,opendocumentthumbnail,calligra_odg_thumbnail,stage_odp_thumbnail,sheets_ods_thumbnail,words_odt_thumbnail,marble_thumbnail_osm,palathumbcreator,gsthumbnail,designerthumbnail,rawthumbnail,words_rtf_thumbnail,svgthumbnail,textthumbnail,ffmpegthumbs,karbon_wmf_thumbnail,words_wpd_thumbnail,karbon_wpg_thumbnail,karbon_xfig_thumbnail"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/thea/Pictures/Wallpapers/liana-mikah-4RTAF3Z-0zM-unsplash.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
