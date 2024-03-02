import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
(async () => {
  await imagemin(['./src/img/*.{jpg,png}'], {
    destination: './src/webp',
    plugins: [
      imageminWebp({ quality: 70 }), // webp
    ],
  });
  console.log('Images optimized');
})();
//	pnpm add imagemin imagemin-webp
