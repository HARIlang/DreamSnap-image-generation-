import React, { useState } from 'react';

const TextToImage = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('prompt', prompt);

    try {
      const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
        method: 'POST',
        headers: {
          'x-api-key': '3a30315f2ba9f6ad7716153357eb235daf5ecc8a012522df1a4c586697b4d28562f089968dfae40a13f8cdf3eed5a869',
        },
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        setImageUrl(URL.createObjectURL(blob));
      } else {
        const error = await response.json();
        console.error('Error:', error);
        alert(error.error || 'Failed to generate image');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Something went wrong!');
    }

    setLoading(false);
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated-image.png';
    link.click();
  };

  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          animation: gradientMove 4s ease infinite;
          background-size: 300% 300%;
        }
      `}</style>

      <div className="p-4 max-w-md mx-auto mt-10">
        <div className=" w-[400px] h-[400px] flex items-center justify-center rounded overflow-hidden">
          {loading ? (
            <div className="w-full h-full rounded animate-gradientMove bg-gradient-to-r from-pink-300 via-fuchsia-300 to-rose-300 "  />
          ) : (
            imageUrl && (
              <div className="mt-4 border-2 border-white">
                <img src={imageUrl} alt="Generated" className="rounded shadow-lg mb-2 " />
              </div>
            )
          )}
        </div>

        <textarea
          className="w-full p-2 border rounded mb-2 text-white bg-black focus:outline-none mt-3"
          rows="4"
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="flex gap-2 mb-4">
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Image'}
          </button>

          <button
            className={`px-4 py-2 rounded ${
              imageUrl ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleDownload}
            disabled={loading}
          >
            Download Image
          </button>
        </div>
      </div>
    </>
  );
};

export default TextToImage;
