import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Upload, Calendar, Wine, Grape, Coins, Gift } from "lucide-react";

const InvestorProfileForm = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Sample investments data
  const investments = [
    {
      id: "1",
      projectName: "Restauration du Patrimoine Château Bordeaux",
      amount: 500,
      date: "2023-10-15",
      status: "active",
      progress: 65,
      rewards: ["Adhésion d'un an au club de vin"],
      imageUrl:
        "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=600&q=80",
    },
    {
      id: "2",
      projectName: "Conversion Bio des Collines Toscanes",
      amount: 250,
      date: "2023-09-22",
      status: "active",
      progress: 80,
      rewards: ["Pack Découverte: Trois bouteilles de différentes cuvées"],
      imageUrl:
        "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&q=80",
    },
    {
      id: "3",
      projectName: "Vignoble Biodynamique en Bourgogne",
      amount: 1000,
      date: "2023-08-05",
      status: "completed",
      progress: 100,
      rewards: [
        "Parrainage de Vigne avec plaque personnalisée",
        "Livraison annuelle de bouteilles",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&q=80",
    },
  ];

  // Sample rewards calendar
  const rewardsCalendar = [
    {
      id: "1",
      projectName: "Restauration du Patrimoine Château Bordeaux",
      rewardType: "Livraison de vin",
      date: "2023-12-15",
      status: "upcoming",
      details: "3 bouteilles de Château Margaux Grand Cru 2015",
    },
    {
      id: "2",
      projectName: "Vignoble Biodynamique en Bourgogne",
      rewardType: "Visite privée",
      date: "2024-04-22",
      status: "upcoming",
      details: "Visite guidée du domaine avec dégustation",
    },
    {
      id: "3",
      projectName: "Conversion Bio des Collines Toscanes",
      rewardType: "Livraison de vin",
      date: "2023-11-10",
      status: "delivered",
      details: "2 bouteilles de Chianti Classico 2017",
    },
  ];

  const handleSaveProfile = () => {
    toast({
      title: "Profil enregistré",
      description: "Votre profil d'investisseur a été mis à jour avec succès.",
    });
  };

  const handleImageUpload = () => {
    // Simulate image upload with random avatar
    const randomSeed = Math.floor(Math.random() * 1000);
    setProfileImage(
      `https://api.dicebear.com/7.x/avataaars/svg?seed=investor${randomSeed}`,
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Mon Profil</TabsTrigger>
          <TabsTrigger value="investments">Mes Investissements</TabsTrigger>
          <TabsTrigger value="rewards">Calendrier des Récompenses</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wine className="h-5 w-5 text-[#722F37]" />
                Informations Personnelles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Image */}
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 bg-gray-100 rounded-full overflow-hidden">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full h-8 w-8 p-0"
                        onClick={handleImageUpload}
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Photo de profil</h3>
                  <p className="text-sm text-gray-500">
                    Cette photo sera visible par les propriétaires de vignobles
                    et autres investisseurs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    placeholder="Jean Dupont"
                    defaultValue="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean.dupont@example.com"
                    defaultValue="jean.dupont@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    placeholder="+33 6 12 34 56 78"
                    defaultValue="+33 6 12 34 56 78"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localisation</Label>
                  <Input
                    id="location"
                    placeholder="Paris, France"
                    defaultValue="Paris, France"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Biographie</Label>
                  <Textarea
                    id="bio"
                    placeholder="Parlez-nous de vous et de votre intérêt pour le vin..."
                    rows={4}
                    defaultValue="Amateur de vin passionné depuis plus de 10 ans, je m'intéresse particulièrement aux vins de Bordeaux et de Bourgogne. J'aime découvrir de nouveaux domaines et soutenir des projets viticoles innovants."
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Préférences d'investissement</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="investmentTypes">
                      Types d'investissement préférés
                    </Label>
                    <select
                      id="investmentTypes"
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="all">Tous les types</option>
                      <option value="donation" selected>
                        Dons avec récompenses
                      </option>
                      <option value="loan">Prêts</option>
                      <option value="equity">Actions</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="winePreferences">Préférences de vin</Label>
                    <select
                      id="winePreferences"
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="all">Tous les types</option>
                      <option value="red" selected>
                        Rouge
                      </option>
                      <option value="white">Blanc</option>
                      <option value="sparkling">Mousseux</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="regions">Régions d'intérêt</Label>
                    <select
                      id="regions"
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="all">Toutes les régions</option>
                      <option value="bordeaux" selected>
                        Bordeaux
                      </option>
                      <option value="burgundy">Bourgogne</option>
                      <option value="loire">Loire</option>
                      <option value="international">International</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">
                      Budget d'investissement moyen
                    </Label>
                    <select
                      id="budget"
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="low">Moins de 100€</option>
                      <option value="medium" selected>
                        100€ - 500€
                      </option>
                      <option value="high">500€ - 1000€</option>
                      <option value="premium">Plus de 1000€</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  className="bg-[#722F37] hover:bg-[#5a252c] text-white"
                  onClick={handleSaveProfile}
                >
                  Enregistrer le profil
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="investments" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-[#722F37]" />
                Mes Investissements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6">
                {investments.map((investment) => (
                  <div
                    key={investment.id}
                    className="border rounded-md overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/4 h-40 md:h-auto">
                        <img
                          src={investment.imageUrl}
                          alt={investment.projectName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-lg">
                            {investment.projectName}
                          </h3>
                          <div className="bg-[#722F37] text-white px-3 py-1 rounded-full text-xs">
                            {investment.amount} €
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Investi le{" "}
                          {new Date(investment.date).toLocaleDateString()}
                        </p>

                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progression du projet</span>
                            <span>{investment.progress}%</span>
                          </div>
                          <Progress
                            value={investment.progress}
                            className="h-2"
                          />
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium">Récompenses:</h4>
                          <ul className="mt-1 space-y-1">
                            {investment.rewards.map((reward, index) => (
                              <li
                                key={index}
                                className="text-sm flex items-start gap-2"
                              >
                                <Gift className="h-4 w-4 text-[#722F37] mt-0.5 flex-shrink-0" />
                                <span>{reward}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">
                            Voir les détails
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistiques d'investissement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Total investi</p>
                  <p className="text-2xl font-bold">1,750 €</p>
                  <p className="text-xs text-gray-600">Sur 3 projets</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Récompenses reçues</p>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-xs text-gray-600">
                    Dont 3 bouteilles de vin
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Projets soutenus</p>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-gray-600">2 actifs, 1 complété</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#722F37]" />
                Calendrier des Récompenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Projet
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Récompense
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Date
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Statut
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {rewardsCalendar.map((reward) => (
                        <tr key={reward.id}>
                          <td className="px-4 py-3 text-sm">
                            {reward.projectName}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <div>
                              <p className="font-medium">{reward.rewardType}</p>
                              <p className="text-xs text-gray-500">
                                {reward.details}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {new Date(reward.date).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {reward.status === "upcoming" ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                À venir
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Livré
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Prochaines récompenses</h3>
                  <div className="space-y-3">
                    {rewardsCalendar
                      .filter((reward) => reward.status === "upcoming")
                      .sort(
                        (a, b) =>
                          new Date(a.date).getTime() -
                          new Date(b.date).getTime(),
                      )
                      .map((reward) => (
                        <div key={reward.id} className="flex items-start gap-3">
                          <div className="bg-white p-2 rounded-md text-center w-12">
                            <p className="text-xs text-gray-500">
                              {new Date(reward.date).toLocaleDateString(
                                "fr-FR",
                                { month: "short" },
                              )}
                            </p>
                            <p className="text-lg font-bold">
                              {new Date(reward.date).getDate()}
                            </p>
                          </div>
                          <div>
                            <p className="font-medium">{reward.rewardType}</p>
                            <p className="text-sm text-gray-600">
                              {reward.projectName}
                            </p>
                            <p className="text-xs text-gray-500">
                              {reward.details}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InvestorProfileForm;
