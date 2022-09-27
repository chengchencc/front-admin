import { withInstall } from '/@/utils';
import cropperImage from './src/Cropper.vue';
import avatarCropper from './src/CropperAvatar.vue';
import squareCropper from './src/CropperSquare.vue';

export * from './src/typing';
export const CropperImage = withInstall(cropperImage);
export const CropperAvatar = withInstall(avatarCropper);
export const CropperSquare = withInstall(squareCropper);
