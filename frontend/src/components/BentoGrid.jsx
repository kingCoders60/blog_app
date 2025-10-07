import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconRefresh,
  IconNews,
} from "@tabler/icons-react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { motion } from "framer-motion";

export function BentoGridLayout() {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());
  const { isDarkMode } = useDarkMode();

  const fetchTechNews = async () => {
    setIsLoading(true);
    try {
      // Using the Hacker News API as it doesn't require an API key
      const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      const storyIds = await response.json();
      
      // Get the top 7 stories
      const topStoryIds = storyIds.slice(0, 7);
      
      // Fetch details for each story
      const storiesPromises = topStoryIds.map(id => 
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(res => res.json())
      );
      
      const stories = await Promise.all(storiesPromises);
      
      // Filter out stories without URLs
      const validStories = stories.filter(story => story.url);
      const fillerCount = 7 - validStories.length;
      
      // If we don't have enough stories with URLs, add some from further down the list
      if (fillerCount > 0 && stories.length > 7) {
        const additionalStories = stories.slice(7).filter(story => story.url).slice(0, fillerCount);
        validStories.push(...additionalStories);
      }
      
      // Map stories to our items format
      const newsData = validStories.slice(0, 7).map((story, i) => {
        let domain = "";
        try {
          if (story.url) {
            const url = new URL(story.url);
            domain = url.hostname.replace('www.', '');
          }
        } catch (e) {
          domain = "news.ycombinator.com";
        }
        
        return {
          title: story.title.length > 40 ? story.title.substring(0, 40) + '...' : story.title,
          description: `${story.score} points • ${story.descendants || 0} comments • ${formatTimeAgo(story.time)}`,
          fullUrl: story.url || `https://news.ycombinator.com/item?id=${story.id}`,
          header: <NewsHeader url={story.url} />,
          icon: getRandomIcon(i),
          domain: domain,
        };
      });
      
      setNewsItems(newsData);
      setLastRefreshed(new Date());
      setError(null);
    } catch (err) {
      console.error("Error fetching tech news:", err);
      setError("Failed to fetch tech news. Please try again.");
      // Fallback to default items if API fails
      setNewsItems(defaultItems);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTechNews();
    
    // Refresh every 5 minutes
    const intervalId = setInterval(fetchTechNews, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const handleRefresh = () => {
    fetchTechNews();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-white flex items-center">
          <IconNews className="mr-2" />
          Tech News
        </h2>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">
            Last updated: {lastRefreshed.toLocaleTimeString()}
          </span>
          <motion.button
            onClick={handleRefresh}
            className="p-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={isLoading}
          >
            <IconRefresh className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
          </motion.button>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 dark:bg-red-900 p-3 rounded-md text-red-700 dark:text-red-300 mb-4">
          {error}
        </div>
      )}

      <BentoGrid className="max-w-4xl mx-auto">
        {isLoading ? (
          Array(7).fill(0).map((_, i) => (
            <SkeletonItem key={i} className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
          ))
        ) : (
          newsItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => item.fullUrl && window.open(item.fullUrl, '_blank')}
              className={`cursor-pointer ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className="h-full" />
            </motion.div>
          ))
        )}
      </BentoGrid>
    </div>
  );
}

const NewsHeader = ({ url }) => {
  const domain = url ? new URL(url).hostname : '';
  const favicon = url ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : '';
  
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {favicon && (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Background glow effect */}
            <div 
              className="absolute w-16 h-16 rounded-full bg-white dark:bg-gray-800 opacity-50 blur-md"
              style={{ boxShadow: '0 0 20px 5px rgba(255,255,255,0.3)' }}
            ></div>
            
            {/* Logo/favicon */}
            <img 
              src={favicon} 
              alt="Site favicon" 
              className="w-12 h-12 rounded-md z-10 object-contain drop-shadow-lg"
              style={{ 
                filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.5))',
                background: 'transparent'
              }}
              onError={(e) => {e.target.style.display = 'none'}}
            />
          </div>
        )}
      </div>
      
      {/* Site indicator badge */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/30 dark:bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
        {domain && (
          <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
            {domain.replace('www.', '')}
          </span>
        )}
      </div>
    </div>
  );
};

const SkeletonItem = ({ className }) => (
  <div className={`row-span-1 rounded-xl border border-neutral-200 dark:border-white/[0.2] bg-white dark:bg-black p-4 animate-pulse ${className}`}>
    <div className="flex flex-1 w-full h-[6rem] rounded-xl bg-gradient-to-br from-neutral-300 dark:from-neutral-800 to-neutral-200 dark:to-neutral-700"></div>
    <div className="h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700 mt-4"></div>
    <div className="h-5 w-1/2 rounded bg-neutral-300 dark:bg-neutral-700 mt-2"></div>
    <div className="h-4 w-3/4 rounded bg-neutral-300 dark:bg-neutral-700 mt-2"></div>
  </div>
);

const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    </div>
);

// Convert Unix timestamp to "time ago" format
const formatTimeAgo = (unixTime) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeDiff = currentTime - unixTime;
  
  if (timeDiff < 60) return 'just now';
  if (timeDiff < 3600) return `${Math.floor(timeDiff / 60)}m ago`;
  if (timeDiff < 86400) return `${Math.floor(timeDiff / 3600)}h ago`;
  if (timeDiff < 604800) return `${Math.floor(timeDiff / 86400)}d ago`;
  
  const date = new Date(unixTime * 1000);
  return date.toLocaleDateString();
};

const getRandomIcon = (index) => {
  const icons = [
    <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    <IconSignature className="h-4 w-4 text-neutral-500" />,
    <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  ];
  
  return icons[index % icons.length];
};
// Default items to use as fallback if API fails
const defaultItems = [
  {
    title: "Security",
    description: "North Korean hackers stole over $2 billion in crypto so far in 2025, researchers say",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
