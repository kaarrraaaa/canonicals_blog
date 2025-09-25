import { Text } from 'components/text';

import styles from './Button.module.scss';

import clsx from 'clsx';

export const Button = ({
	title,
	onClick,
	type,
}: {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
	return (
		<button className={clsx(styles.button, styles[`button_${type}`])}
		type={type} onClick={onClick}>
		<Text weight={800} uppercase>
			{title}
		</Text>
		</button>
	);
};
