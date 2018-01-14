import TagItemCompact from 'template/components/TagItem/TagItemCompactComponent';
import TagItemFolded from 'template/components/TagItem/TagItemFoldedComponent';
import TagItemUnfolded from 'template/components/TagItem/TagItemUnfoldedComponent';
import { withProps } from 'recompose';
import * as styles from 'template/styled/styles';
import get from 'lodash/get';

const getComponentColor = color => get({
  blue: styles.blue,
  pink: styles.pink,
  green: styles.green,
  orange: styles.orange,
  asphalt: styles.asphalt,
}, color);

const enhance = withProps(props => ({
  color: getComponentColor(props.color),
  toggleProductFilter: get(props, 'toggleProductFilter', () => {}).bind(null, props.item),
}));

export const TagItemCompactComponent = enhance(TagItemCompact);
export const TagItemFoldedComponent = enhance(TagItemFolded);
export const TagItemUnfoldedComponent = enhance(TagItemUnfolded);
