import React, { useState, useRef, useEffect } from 'react';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify, Bold, Italic, Underline, Undo, Redo } from 'lucide-react';

export default function EnhancedTextEditor() {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [alignment, setAlignment] = useState('left');
  const editorRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, []);

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
    switch (command) {
      case 'bold':
        setIsBold(!isBold);
        break;
      case 'italic':
        setIsItalic(!isItalic);
        break;
      case 'underline':
        setIsUnderline(!isUnderline);
        break;
      default:
        break;
    }
  };

  const handleAlignment = (align) => {
    document.execCommand(`justify${align}`, false, null);
    setAlignment(align);
  };

  const handleUndo = () => {
    document.execCommand('undo', false, null);
    updateUndoRedoState();
  };

  const handleRedo = () => {
    document.execCommand('redo', false, null);
    updateUndoRedoState();
  };

  const updateUndoRedoState = () => {
    setCanUndo(document.queryCommandEnabled('undo'));
    setCanRedo(document.queryCommandEnabled('redo'));
  };

  const handleInput = () => {
    updateUndoRedoState();
  };

  const ButtonStyle = "p-2 rounded text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50";
  const ActiveButtonStyle = "p-2 rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50";

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          className={isBold ? ActiveButtonStyle : ButtonStyle}
          onClick={() => handleFormat('bold')}
          aria-pressed={isBold}
          title="Bold"
        >
          <Bold size={20} />
        </button>
        <button
          className={isItalic ? ActiveButtonStyle : ButtonStyle}
          onClick={() => handleFormat('italic')}
          aria-pressed={isItalic}
          title="Italic"
        >
          <Italic size={20} />
        </button>
        <button
          className={isUnderline ? ActiveButtonStyle : ButtonStyle}
          onClick={() => handleFormat('underline')}
          aria-pressed={isUnderline}
          title="Underline"
        >
          <Underline size={20} />
        </button>
        <div className="border-l border-gray-300 mx-2" />
        <button
          className={alignment === 'left' ? ActiveButtonStyle : ButtonStyle}
          onClick={() => handleAlignment('left')}
          aria-pressed={alignment === 'left'}
          title="Align Left"
        >
          <AlignLeft size={20} />
        </button>
        <button
          className={alignment === 'center' ? ActiveButtonStyle : ButtonStyle}
          onClick={() => handleAlignment('center')}
          aria-pressed={alignment === 'center'}
          title="Align Center"
        >
          <AlignCenter size={20} />
        </button>
        <button
          className={alignment === 'right' ? ActiveButtonStyle : ButtonStyle}
          onClick={() => handleAlignment('right')}
          aria-pressed={alignment === 'right'}
          title="Align Right"
        >
          <AlignRight size={20} />
        </button>
        <button
          className={alignment === 'full' ? ActiveButtonStyle : ButtonStyle}
          onClick={() => handleAlignment('full')}
          aria-pressed={alignment === 'full'}
          title="Justify"
        >
          <AlignJustify size={20} />
        </button>
        <div className="border-l border-gray-300 mx-2" />
        <button
          className={canUndo ? ButtonStyle : `${ButtonStyle} opacity-50 cursor-not-allowed`}
          onClick={handleUndo}
          disabled={!canUndo}
          title="Undo"
        >
          <Undo size={20} />
        </button>
        <button
          className={canRedo ? ButtonStyle : `${ButtonStyle} opacity-50 cursor-not-allowed`}
          onClick={handleRedo}
          disabled={!canRedo}
          title="Redo"
        >
          <Redo size={20} />
        </button>
      </div>
      <div
        ref={editorRef}
        className="w-full min-h-[300px] p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        contentEditable={true}
        onInput={handleInput}
        aria-label="Text editor content"
        role="textbox"
        aria-multiline="true"
      />
    </div>
  );
}