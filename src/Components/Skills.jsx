import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from '@react-spring/web';

const data = [
  { id: 1, image: '/programming-iphone-java-logo-on-black-0hnhv8ki7x2rjgyu.jpg', label: 'Java' },
  { id: 2, image: '/javascript-logo-javascript-icon-transparent-free-png.webp', label: 'JavaScript' },
  { id: 3, image: '/html_img.png', label: 'HTML' },
  { id: 4, image: '/css-3.png', label: 'CSS' },
  { id: 5, image: '/React.webp', label: 'React' },
  { id: 6, image: '/sql.png', label: 'SQL' },
  { id: 7, image: '/springboot.png', label: 'Spring Boot' },
  { id: 8, image: '/tailwind.png', label: 'Tailwind CSS' },
  { id: 9, image: '/algo.png', label: 'Data Structure and Algorithms' },
];

const Skills = () => {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) {
        setColumns(5);
      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        setColumns(4);
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(3);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += 200 / 2) - 200 / 2; // Adjusted height for each image
      return { ...child, x, y, width: width / columns, height: 200 };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div ref={ref} className="relative min-h-screen">
      {transitions((style, item) => (
        <a.div key={item.id} style={style} className="absolute p-4">
          <div className="bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 mb-4 grid gap-x-8 gap-y-14 grid-cols-3 ">
            <img
              className="w-16 h-16 rounded-full mb-4 mx-auto"
              src={item.image}
              alt={`${item.label} Logo`}
            />
            <span className="text-center text-lg font-semibold">{item.label}</span>
          </div>
        </a.div>
      ))}
    </div>
  );
};

export default Skills;
