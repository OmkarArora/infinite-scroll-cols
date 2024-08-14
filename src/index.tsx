import React, { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
	ChakraProvider,
	Grid,
	GridItem,
	Box,
	useBreakpointValue,
} from "@chakra-ui/react";
import photos from "./photos.json";
import { InfiniteGrid } from "./infinite-grid";
import "./styles.css";
import { useGesture } from "@use-gesture/react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// @ts-ignore
import { Lethargy } from "lethargy";

const lethargy = new Lethargy(15, 12, 0.05);

const MotionBox = motion(Box);

function App() {
	const grid1Ref = useRef(null);
	const grid2Ref = useRef(null);
	const grid3Ref = useRef(null);

	const containerRef = React.useRef<HTMLDivElement>(null);

	const config1 = useBreakpointValue({
		base: { mass: 0.2, damping: 28, stiffness: 200 }, // snappier transitions on small screens
		md: { mass: 0.25, damping: 40, stiffness: 200 }, // more damping on large screens
	});

	const config2 = useBreakpointValue({
		base: { mass: 0.2, damping: 28, stiffness: 200 }, // snappier transitions on small screens
		md: { mass: 0.25, damping: 40, stiffness: 200 }, // more damping on large screens
	});

	const config3 = useBreakpointValue({
		base: { mass: 0.2, damping: 28, stiffness: 200 }, // snappier transitions on small screens
		md: { mass: 0.25, damping: 40, stiffness: 200 }, // more damping on large screens
	});

	const springs1 = {
		x: useSpring(0, config1),
		y: useSpring(0, config1),
	};

	const springs2 = {
		x: useSpring(0, config2),
		y: useSpring(0, config2),
	};

	const springs3 = {
		x: useSpring(0, config3),
		y: useSpring(0, config3),
	};

	useGesture(
		{
			onWheel: ({ event, delta: [dx, dy] }) => {
				event.preventDefault();
				if (lethargy.check(event) !== false) {
					// springs.x.set(springs.x.get() + dx * 5);
					springs1.y.set(springs1.y.get() + dy * 5);
					springs2.y.set(springs2.y.get() + dy * 10);
					springs3.y.set(springs3.y.get() + dy * 8);
				}
			},
		},
		{ target: containerRef, wheel: { eventOptions: { passive: false } } }
	);

	return (
		<MotionBox
			display="flex"
			flexDirection="row"
			w="100vw"
			h="100vh"
			overflow="hidden"
			ref={containerRef}
		>
			{/* Infinite Grid 1 */}
			<InfiniteGrid springs={springs1}>
				<Grid
					ref={grid1Ref}
					templateAreas={`
            "a"
            "b"
            "c"
            "d"
            "e"
            "f"
            "g"
            "h"
            "i"
          `}
					gridTemplateColumns={"1fr"}
					gridTemplateRows={"repeat(9, 500px)"}
					gap={8}
					p={4}
					overflowY="scroll"
					flex="1"
					h="100%"
				>
					<GridItem
						area="a"
						bgImage={photos[0].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="b"
						bgImage={photos[1].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="c"
						bgImage={photos[2].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="d"
						bgImage={photos[3].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="e"
						bgImage={photos[4].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="f"
						bgImage={photos[5].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="g"
						bgImage={photos[6].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="h"
						bgImage={photos[7].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="i"
						bgImage={photos[8].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
				</Grid>
			</InfiniteGrid>

			{/* Infinite Grid 2 */}
			<InfiniteGrid springs={springs2}>
				<Grid
					ref={grid2Ref}
					templateAreas={`
            "j"
            "k"
            "l"
            "m"
            "n"
            "o"
            "p"
            "q"
            "r"
          `}
					gridTemplateColumns={"1fr"}
					gridTemplateRows={"repeat(9, 500px)"}
					gap={8}
					p={4}
					overflowY="scroll"
					flex="1"
					h="100%"
				>
					<GridItem
						area="j"
						bgImage={photos[0].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="k"
						bgImage={photos[1].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="l"
						bgImage={photos[2].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="m"
						bgImage={photos[3].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="n"
						bgImage={photos[4].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="o"
						bgImage={photos[5].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="p"
						bgImage={photos[6].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="q"
						bgImage={photos[7].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="r"
						bgImage={photos[8].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
				</Grid>
			</InfiniteGrid>

			{/* Infinite Grid 3 */}
			<InfiniteGrid springs={springs3}>
				<Grid
					ref={grid3Ref}
					templateAreas={`
            "s"
            "t"
            "u"
            "v"
            "w"
            "x"
            "y"
            "z"
            "aa"
          `}
					gridTemplateColumns={"1fr"}
					gridTemplateRows={"repeat(9, 500px)"}
					gap={8}
					p={4}
					overflowY="scroll"
					flex="1"
					h="100%"
				>
					<GridItem
						area="s"
						bgImage={photos[0].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="t"
						bgImage={photos[1].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="u"
						bgImage={photos[2].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="v"
						bgImage={photos[3].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="w"
						bgImage={photos[4].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="x"
						bgImage={photos[5].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="y"
						bgImage={photos[6].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="z"
						bgImage={photos[7].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
					<GridItem
						area="aa"
						bgImage={photos[8].download_url}
						bgSize="cover"
						rounded="3xl"
					/>
				</Grid>
			</InfiniteGrid>
		</MotionBox>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
