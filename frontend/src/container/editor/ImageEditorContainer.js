import React, { createRef, useEffect } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'

const ImageEditorContainer = (props) => {
    const { imageUrl } = props; 
    const editorRef = React.createRef();

    return (
    <ImageEditor
        ref={editorRef}
        includeUI={{
        loadImage: {
          path: imageUrl,
          name: 'SampleImage'
        },
        // theme: 'whitetheme','
        menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter'],
        initMenu: 'filter',
        uiSize: {
            width: '1000px',
            height: '700px'
        },
        menuBarPosition: 'bottom'
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70
        }}
        usageStatistics={true}
    />)      
  };

export default ImageEditorContainer;