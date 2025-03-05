import React from "react";
import { MapPin, Calendar, Award, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface VineyardProfileProps {
  name: string;
  description: string;
  foundedYear: number;
  region: string;
  owner: string;
  awards: string[];
  imageUrl: string;
  coverImageUrl: string;
  websiteUrl?: string;
}

const VineyardProfile = ({
  name,
  description,
  foundedYear,
  region,
  owner,
  awards,
  imageUrl,
  coverImageUrl,
  websiteUrl,
}: VineyardProfileProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
      {/* Cover Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={coverImageUrl}
          alt={`${name} vignoble`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Profile Content */}
      <div className="px-6 py-4 relative">
        {/* Vineyard Logo */}
        <div className="absolute -top-16 left-6 w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Vineyard Info */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-[#722F37]" />
              {region}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-[#722F37]" />
              Fondé en {foundedYear}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-[#722F37]" />
              Propriétaire: {owner}
            </div>
          </div>

          <p className="mt-4 text-gray-700">{description}</p>

          {/* Awards */}
          {awards.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold flex items-center">
                <Award className="h-5 w-5 mr-2 text-[#722F37]" />
                Distinctions
              </h3>
              <ul className="mt-2 space-y-1">
                {awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-start"
                  >
                    <span className="mr-2">•</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Separator className="my-6" />

          {/* Actions */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              className="text-[#722F37] border-[#722F37]"
            >
              Contacter le domaine
            </Button>

            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#722F37] hover:underline text-sm"
              >
                Visiter le site web
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VineyardProfile;
