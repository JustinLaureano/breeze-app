import React from 'react';
import { PageProps } from '@/types';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { grey } from '@mui/material/colors';

export default function NavigationDrawer(props: PageProps) {
	const theme = useTheme();
	console.log(theme)
	useTheme
	const drawerWidth = 180;
	const railWidth = 60;

	const links = [
		{ label: 'Home', icon: '', route: route('home') },
		{ label: 'Requests', icon: '', route: route('home') },
		{ label: 'Receiving', icon: '', route: route('home') },
		{ label: 'Shipping', icon: '', route: route('home') },
		{ label: 'IRM', icon: '', route: route('home') },
		{ label: 'Materials', icon: '', route: route('home') },
		{ label: 'Quality', icon: '', route: route('home') },
	];

	return (
		<Drawer
			variant="permanent"
			elevation={0}
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					backgroundColor: grey[50],
					borderRight: 'none',
					boxSizing: 'border-box',
					width: drawerWidth,
				},
			}}
		>
			<Toolbar variant="dense" />

			<Box sx={{ overflow: 'auto' }}>
				<List>
					{links.map((link, index) => (
						<ListItem key={index} disablePadding >
							<ListItemButton>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={link.label}
									primaryTypographyProps={{
										fontWeight: 'medium',
										variant: 'navLabel',
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				{/* <Divider /> */}
			</Box>
		</Drawer>
	);
}
