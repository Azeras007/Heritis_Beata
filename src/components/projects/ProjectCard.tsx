import React from "react";
import { Heart, Share2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ProjectCardProps {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  fundingGoal?: number;
  currentFunding?: number;
  daysLeft?: number;
  location?: string;
  ownerName?: string;
  ownerAvatarUrl?: string;
}

const ProjectCard = ({
  id = "1",
  title = "Château Bordeaux Heritage Restoration",
  description = "Help us restore this 18th century vineyard to its former glory and become part of our exclusive wine club with special vintage access.",
  imageUrl = "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=600&q=80",
  fundingGoal = 50000,
  currentFunding = 32500,
  daysLeft = 21,
  location = "Bordeaux, France",
  ownerName = "Marie Dubois",
  ownerAvatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
}: ProjectCardProps) => {
  const fundingPercentage = Math.min(
    Math.round((currentFunding / fundingGoal) * 100),
    100,
  );

  return (
    <Card className="w-[380px] h-[480px] overflow-hidden flex flex-col bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/80 hover:bg-white"
          >
            <Heart className="h-5 w-5 text-rose-500" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/80 hover:bg-white"
          >
            <Share2 className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded-md text-xs font-medium">
          {location}
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-900 line-clamp-1">
          {title}
        </CardTitle>
        <div className="flex items-center gap-2 mt-1">
          <img
            src={ownerAvatarUrl}
            alt={ownerName}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-gray-600">{ownerName}</span>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-sm text-gray-600 line-clamp-3 mb-4">
          {description}
        </CardDescription>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-900">
              ${currentFunding.toLocaleString()}
            </span>
            <span className="text-gray-500">
              of ${fundingGoal.toLocaleString()}
            </span>
          </div>
          <Progress value={fundingPercentage} className="h-2 bg-gray-200" />
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-900">
              {fundingPercentage}%
            </span>
            <span className="text-gray-500">{daysLeft} days left</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button className="w-full bg-[#722F37] hover:bg-[#5a252c] text-white">
          Support This Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
