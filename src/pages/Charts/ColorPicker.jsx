import React, { useState, useCallback, useRef, useEffect } from 'react';

export default function EnhancedColorPicker() {
  const [color, setColor] = useState({ h: 0, s: 100, l: 50, a: 1 });
  const [rgbColor, setRgbColor] = useState({ r: 255, g: 0, b: 0 });
  const colorPanelRef = useRef(null);
  const huePanelRef = useRef(null);

  const hslToRgb = useCallback((h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return {
      r: Math.round(255 * f(0)),
      g: Math.round(255 * f(8)),
      b: Math.round(255 * f(4))
    };
  }, []);

  const rgbToHex = useCallback((r, g, b) => {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }, []);

  const updateRgbColor = useCallback(() => {
    const rgb = hslToRgb(color.h, color.s, color.l);
    setRgbColor(rgb);
  }, [color, hslToRgb]);

  useEffect(() => {
    updateRgbColor();
  }, [color, updateRgbColor]);

  const handleColorPanelClick = useCallback((e) => {
    const rect = colorPanelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const s = Math.round((x / rect.width) * 100);
    const l = Math.round(100 - (y / rect.height) * 100);
    setColor(prevColor => ({ ...prevColor, s, l }));
  }, []);

  const handleHuePanelClick = useCallback((e) => {
    const rect = huePanelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const h = Math.round((x / rect.width) * 360);
    setColor(prevColor => ({ ...prevColor, h }));
  }, []);

  const handleSliderChange = useCallback((channel, value) => {
    setRgbColor(prevColor => ({
      ...prevColor,
      [channel]: parseInt(value, 10)
    }));
    const [r, g, b] = [rgbColor.r, rgbColor.g, rgbColor.b].map(c => c / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h;
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h = Math.round(h * 60);
    setColor({ h, s: Math.round(s * 100), l: Math.round(l * 100), a: color.a });
  }, [rgbColor, color.a]);

  const colorHex = rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b);

  const ColorSlider = ({ channel, value, onChange }) => (
    <div className="flex items-center mb-4">
      <label htmlFor={`${channel}-slider`} className="w-20 text-sm font-medium text-gray-700">
        {channel.toUpperCase()}:
      </label>
      <input
        type="range"
        id={`${channel}-slider`}
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(channel, e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <span className="ml-2 w-10 text-sm text-gray-700">{value}</span>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Enhanced Color Picker</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div 
            ref={colorPanelRef}
            className="w-full h-48 mb-4 rounded-lg cursor-crosshair"
            style={{
              backgroundColor: `hsl(${color.h}, 100%, 50%)`,
              backgroundImage: `
                linear-gradient(to right, #fff, transparent),
                linear-gradient(to top, #000, transparent)
              `
            }}
            onClick={handleColorPanelClick}
            role="button"
            aria-label="Color panel: Click to select saturation and lightness"
            tabIndex="0"
          >
            <div 
              className="w-4 h-4 rounded-full border-2 border-white shadow-md"
              style={{
                backgroundColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)`,
                transform: `translate(${color.s}%, ${100 - color.l}%)`,
              }}
            />
          </div>
          <div 
            ref={huePanelRef}
            className="w-full h-8 mb-4 rounded-lg cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(to right, 
                #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)`
            }}
            onClick={handleHuePanelClick}
            role="slider"
            aria-label="Hue slider: Click to select hue"
            aria-valuemin="0"
            aria-valuemax="360"
            aria-valuenow={color.h}
            tabIndex="0"
          >
            <div 
              className="w-2 h-8 bg-white border border-gray-300"
              style={{ transform: `translateX(${color.h / 360 * 100}%)` }}
            />
          </div>
        </div>
        <div className="flex-1">
          <ColorSlider channel="r" value={rgbColor.r} onChange={handleSliderChange} />
          <ColorSlider channel="g" value={rgbColor.g} onChange={handleSliderChange} />
          <ColorSlider channel="b" value={rgbColor.b} onChange={handleSliderChange} />
          <div className="flex items-center justify-between mt-6">
            <div 
              className="w-24 h-24 rounded-lg shadow-inner" 
              style={{ backgroundColor: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})` }}
              aria-label={`Selected color: ${colorHex}`}
            ></div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">HEX: {colorHex}</p>
              <p className="text-sm font-medium text-gray-700">
                RGB: ({rgbColor.r}, {rgbColor.g}, {rgbColor.b})
              </p>
              <p className="text-sm font-medium text-gray-700">
                HSL: ({color.h}, {color.s}%, {color.l}%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}