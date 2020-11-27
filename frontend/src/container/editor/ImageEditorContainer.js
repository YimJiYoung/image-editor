import React, { useContext, useEffect } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'
import userContext from '../../utils/context';

const ImageEditorContainer = () => {
    const editorRef = React.createRef();
    const { data, setData } = useContext(userContext);
    const { editingImageUrl } = data;
    const sampleImageUrl = 'https://kr.object.ncloudstorage.com/image-editor/mountain_%2Bwallpaper.jpg';

    return (
    <ImageEditor
        ref={editorRef}
        includeUI={{
        loadImage: {
          path: editingImageUrl? editingImageUrl: sampleImageUrl,
          name: 'image'
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