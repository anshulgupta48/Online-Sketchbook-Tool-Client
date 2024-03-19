import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeBrushSize } from '@/redux/toolboxSlice';
import { socket } from '@/socket';
import { COLORS, MENU_ITEMS } from '@/constants';
import styles from './index.module.css';

const Toolbox = () => {
    const dispatch = useDispatch();
    const { activeMenuItem } = useSelector((state) => state.menu);
    const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

    const updateColor = (newColor) => {
        dispatch(changeColor({ item: activeMenuItem, color: newColor }));
        socket.emit('changeConfig', { color: newColor, size });
    }
    
    const updateBrushSize = (e) => {
        dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
        socket.emit('changeConfig', { color, size: e.target.value });
    }


    return (
        <div className={styles["toolbox_container"]}>
            {activeMenuItem === MENU_ITEMS.PENCIL && <div className={styles["toolbox_container_item"]}>
                <h4 className={styles["toolbox_container_item_text"]}>Brush Size</h4>
                <div className={styles["toolbox_container_item_box"]}>
                    <div className={color === COLORS.BLACK ? `${styles.color_box} ${styles.active}` : `${styles.color_box}`} style={{ backgroundColor: COLORS.BLACK }} onClick={() => updateColor(COLORS.BLACK)} />
                    <div className={color === COLORS.RED ? `${styles.color_box} ${styles.active}` : `${styles.color_box}`} style={{ backgroundColor: COLORS.RED }} onClick={() => updateColor(COLORS.RED)} />
                    <div className={color === COLORS.GREEN ? `${styles.color_box} ${styles.active}` : `${styles.color_box}`} style={{ backgroundColor: COLORS.GREEN }} onClick={() => updateColor(COLORS.GREEN)} />
                    <div className={color === COLORS.BLUE ? `${styles.color_box} ${styles.active}` : `${styles.color_box}`} style={{ backgroundColor: COLORS.BLUE }} onClick={() => updateColor(COLORS.BLUE)} />
                    <div className={color === COLORS.ORANGE ? `${styles.color_box} ${styles.active}` : `${styles.color_box}`} style={{ backgroundColor: COLORS.ORANGE }} onClick={() => updateColor(COLORS.ORANGE)} />
                    <div className={color === COLORS.YELLOW ? `${styles.color_box} ${styles.active}` : `${styles.color_box}`} style={{ backgroundColor: COLORS.YELLOW }} onClick={() => updateColor(COLORS.YELLOW)} />
                </div>
            </div>}

            <div className={styles["toolbox_container_item"]}>
                <h4 className={styles["toolbox_container_item_text"]}>Brush Size</h4>
                <div className={styles["toolbox_container_item_box"]}>
                    <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} value={size} />
                </div>
            </div>
        </div>
    )
}

export default Toolbox;