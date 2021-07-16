import { AvatarBase } from './Avatar';
import { Accessory } from './Avatar.Accessory';
import { withTheme } from '../config';
const ThemedAccessory = withTheme(Accessory, 'Accessory');
export { AvatarBase, ThemedAccessory };
export const Avatar = Object.assign(AvatarBase);
const ThemedAvatar = Object.assign(withTheme(Avatar, 'Avatar'), {
    Accessory: ThemedAccessory,
});
export default ThemedAvatar;
