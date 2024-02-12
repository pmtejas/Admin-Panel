"use client";
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_HOME } from '../../graphql/Mutations';
interface BestActivitiesToTry {
  description: string;
  image: string;
  name: string;
}
interface Destination{
  description: string;
  image: string;
  name: string;
}
interface Ferries{
  description: string;
  image: string;
  name: string;
  place: string;
}
interface SightSeeings{
  description: string;
  image: string;
  name: string;
}
interface SocialMediaLinks{
  Facebook: string;
  Instagram: string;
  Twitter: string;
  Youtube: string;
}
interface TopBeaches{
  description: string;
  image: string;
  name: string;
  place: string;
}
interface TopsellingPackages{
  description: string;
  image: string;
  name: string;
  price: string;
}

const Admin: React.FC = () => {
  const [logo, setLogo] = useState<string>('');
  const [tagline, setTagline] = useState<string>('');
  const [video, setVideo] = useState<string>('');
  const [BestActivitiesToTry, setBestActivitiesToTry] = useState<BestActivitiesToTry[]>([{description: '',image: '',name: '',},]);
  const [Destination, setDestination] = useState<Destination[]>([{description: '',image: '',name: '',},]);
  const [Ferries, setFerries] = useState<Ferries[]>([{description: '',image: '',name: '',place: '',},]);
  const [SightSeeings, setSightSeeings] = useState<SightSeeings[]>([{description: '',image: '',name: '',},]);
  const [SocialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLinks[]>([{Facebook: '',Instagram: '',Twitter: '',Youtube: '',},]);
  const [TopBeaches, setTopBeaches] = useState<TopBeaches[]>([{description: '',image: '',name: '',place: '',},]);
  const [TopsellingPackages, setTopsellingPackages] = useState<TopsellingPackages[]>([{description: '',image: '',name: '',price: '',},]);
  const [createHome, { loading, error }] = useMutation(CREATE_HOME);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await createHome({
        variables: {
          homeInput: {
            logo,
            tagline,
            video,
            BestActivitiesToTry:{description: BestActivitiesToTry[0].description,image: BestActivitiesToTry[0].image,name: BestActivitiesToTry[0].name,},
            Destination:{description: Destination[0].description,image: Destination[0].image,name: Destination[0].name,},
            Ferries:{description: Ferries[0].description,image: Ferries[0].image,name: Ferries[0].name,place: Ferries[0].place,},
            SightSeeings:{description: SightSeeings[0].description,image: SightSeeings[0].image,name: SightSeeings[0].name,},
            SocialMediaLinks:{Facebook: SocialMediaLinks[0].Facebook,Instagram: SocialMediaLinks[0].Instagram,Twitter: SocialMediaLinks[0].Twitter,Youtube: SocialMediaLinks[0].Youtube,},
            TopBeaches:{description: TopBeaches[0].description,image: TopBeaches[0].image,name: TopBeaches[0].name,place: TopBeaches[0].place,},
            TopsellingPackages:{description: TopsellingPackages[0].description,image: TopsellingPackages[0].image,name: TopsellingPackages[0].name,price: TopsellingPackages[0].price,}, 
          },
        },
      });
      const newHomeId = data.createHome.inserted_id; // Access the inserted ID

      console.log('Home created with ID:', newHomeId);

      console.log('Home created:', data.createHome);

      // Reset the form after successful submission
      setLogo('');
      setTagline('');
      setVideo('');
      setBestActivitiesToTry([{description: '',image: '',name: '',},]);
      setDestination([{description: '',image: '',name: '',},]);
      setFerries([{description: '',image: '',name: '',place: '',},]);
      setSightSeeings([{description: '',image: '',name: '',},]);
      setSocialMediaLinks([{Facebook: '',Instagram: '',Twitter: '',Youtube: '',},]);
      setTopBeaches([{description: '',image: '',name: '',place: '',},]);
      setTopsellingPackages([{description: '',image: '',name: '',price: '',},]);
    } catch (err) {
      console.error('Error creating home:', err);
    }
  };

  return (
    <div>
      <h1>Create a New Home</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Logo:<input type="text" value={logo} onChange={(e) => setLogo(e.target.value)} />
        </label>
        <br />
        <label>
          Tagline:<input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />
        </label>
        <br />
        <label>
          Video:<input type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
        </label>
        <br />
        {BestActivitiesToTry.map((activity, index) => (
          <div key={index}>
            <h2>Best Activities To Try</h2>
            <label>
              Description:<input
                type="text"
                value={activity.description}
                onChange={(e) => {
                  const newBestActivitiesToTry = [...BestActivitiesToTry];
                  newBestActivitiesToTry[index].description = e.target.value;
                  setBestActivitiesToTry(newBestActivitiesToTry);
                }}
              />
            </label>
            <br />
            <label>
              Image:<input
                type="text"
                value={activity.image}
                onChange={(e) => {
                  const newBestActivitiesToTry = [...BestActivitiesToTry];
                  newBestActivitiesToTry[index].image = e.target.value;
                  setBestActivitiesToTry(newBestActivitiesToTry);
                }}
              />
            </label>
            <br />
            <label>
              Name:<input
                type="text"
                value={activity.name}
                onChange={(e) => {
                  const newBestActivitiesToTry = [...BestActivitiesToTry];
                  newBestActivitiesToTry[index].name = e.target.value;
                  setBestActivitiesToTry(newBestActivitiesToTry);
                }}
              />
            </label>
            <br />
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            setBestActivitiesToTry([
              ...BestActivitiesToTry,
              {
                description: '',
                image: '',
                name: '',
              },
            ]);
          }}
        >
          Add Best Activities To Try
        </button>
        <br />
        {/* remove Activity */}
        <button
          type="button"
          onClick={() => {
            setBestActivitiesToTry(BestActivitiesToTry.slice(0, BestActivitiesToTry.length - 1));
          }}
        >
          Remove Best Activities To Try
        </button>
        <br />
        {Destination.map((destination, index) => (
          <div key={index}>
            <h2>Destination</h2>
            <label>
              Description:<input
                type="text"
                value={destination.description}
                onChange={(e) => {
                  const newDestination = [...Destination];
                  newDestination[index].description = e.target.value;
                  setDestination(newDestination);
                }}
              />
            </label>
            <br />
            <label>
              Image:<input
                type="text"
                value={destination.image}
                onChange={(e) => {
                  const newDestination = [...Destination];
                  newDestination[index].image = e.target.value;
                  setDestination(newDestination);
                }}
              />
            </label>
            <br />
            <label>
              Name:<input
                type="text"
                value={destination.name}
                onChange={(e) => {
                  const newDestination = [...Destination];
                  newDestination[index].name = e.target.value;
                  setDestination(newDestination);
                }}
              />
            </label>
            <br />
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            setDestination([
              ...Destination,
              {
                description: '',
                image: '',
                name: '',
              },
            ]);
          }}
        >
          Add Destination
        </button>
        <br />
        {/* remove Destination */}
        <button
          type="button"
          onClick={() => {
            setDestination(Destination.slice(0, Destination.length - 1));
          }}
        >
          Remove Destination
        </button>
        <br />
        {Ferries.map((ferry, index) => (
          <div key={index}>
            <h2>Ferries</h2>
            <label>
              Description:<input
                type="text"
                value={ferry.description}
                onChange={(e) => {
                  const newFerries = [...Ferries];
                  newFerries[index].description = e.target.value;
                  setFerries(newFerries);
                }}
              />
            </label>
            <br />
            <label>
              Image:<input
                type="text"
                value={ferry.image}
                onChange={(e) => {
                  const newFerries = [...Ferries];
                  newFerries[index].image = e.target.value;
                  setFerries(newFerries);
                }}
              />
            </label>
            <br />
            <label>
              Name:<input
                type="text"
                value={ferry.name}
                onChange={(e) => {
                  const newFerries = [...Ferries];
                  newFerries[index].name = e.target.value;
                  setFerries(newFerries);
                }}
              />
            </label>
            <br />
            <label>
              Place:<input
                type="text"
                value={ferry.place}
                onChange={(e) => {
                  const newFerries = [...Ferries];
                  newFerries[index].place = e.target.value;
                  setFerries(newFerries);
                }}
              />
            </label>
            <br />
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            setFerries([
              ...Ferries,
              {
                description: '',
                image: '',
                name: '',
                place: '',
              },
            ]);
          }}
        >
          Add Ferries
        </button>
        <br />
        {/* remove Ferry */}
        <button
          type="button"
          onClick={() => {
            setFerries(Ferries.slice(0, Ferries.length - 1));
          }}
        >
          Remove Ferries
        </button>
        <br />
        {SightSeeings.map((sightseeing, index) => (
          <div key={index}>
            <h2>Sight Seeings</h2>
            <label>
              Description:<input
                type="text"
                value={sightseeing.description}
                onChange={(e) => {
                  const newSightSeeings = [...SightSeeings];
                  newSightSeeings[index].description = e.target.value;
                  setSightSeeings(newSightSeeings);
                }}
              />
            </label>
            <br />
            <label>
              Image:<input
                type="text"
                value={sightseeing.image}
                onChange={(e) => {
                  const newSightSeeings = [...SightSeeings];
                  newSightSeeings[index].image = e.target.value;
                  setSightSeeings(newSightSeeings);
                }}
              />
            </label>
            <br />
            <label>
              Name:<input
                type="text"
                value={sightseeing.name}
                onChange={(e) => {
                  const newSightSeeings = [...SightSeeings];
                  newSightSeeings[index].name = e.target.value;
                  setSightSeeings(newSightSeeings);
                }}
              />
            </label>
            <br />
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            setSightSeeings([
              ...SightSeeings,
              {
                description: '',
                image: '',
                name: '',
              },
            ]);
          }}
        >
          Add Sight Seeings
        </button>
        <br />
        {/* remove Sight Seeing */}
        <button
          type="button"
          onClick={() => {
            setSightSeeings(SightSeeings.slice(0, SightSeeings.length - 1));
          }}
        >
          Remove Sight Seeings
        </button>
        <br />
        {SocialMediaLinks.map((socialMedia, index) => (
          <div key={index}>
            <h2>Social Media Links</h2>
            <label>
              Facebook:<input
                type="text"
                value={socialMedia.Facebook}
                onChange={(e) => {
                  const newSocialMediaLinks = [...SocialMediaLinks];
                  newSocialMediaLinks[index].Facebook = e.target.value;
                  setSocialMediaLinks(newSocialMediaLinks);
                }}
              />
            </label>
            <br />
            <label>
              Instagram:<input
                type="text"
                value={socialMedia.Instagram}
                onChange={(e) => {
                  const newSocialMediaLinks = [...SocialMediaLinks];
                  newSocialMediaLinks[index].Instagram = e.target.value;
                  setSocialMediaLinks(newSocialMediaLinks);
                }}
              />
            </label>
            <br />
            <label>
              Twitter:<input
                type="text"
                value={socialMedia.Twitter}
                onChange={(e) => {
                  const newSocialMediaLinks = [...SocialMediaLinks];
                  newSocialMediaLinks[index].Twitter = e.target.value;
                  setSocialMediaLinks(newSocialMediaLinks);
                }}
              />
            </label>
            <br />
            <label>
              Youtube:<input
                type="text"
                value={socialMedia.Youtube}
                onChange={(e) => {
                  const newSocialMediaLinks = [...SocialMediaLinks];
                  newSocialMediaLinks[index].Youtube = e.target.value;
                  setSocialMediaLinks(newSocialMediaLinks);
                }}
              />
            </label>
            <br />
          </div>
        ))}
        {/* <button
          type="button"
          onClick={() => {
            setSocialMediaLinks([
              ...SocialMediaLinks,
              {
                Facebook: '',
                Instagram: '',
                Twitter: '',
                Youtube: '',
              },
            ]);
          }}
        >
          Add Social Media Links
        </button> */}
        {/* <br /> */}
        {/* remove Social Media Link */}
        {/* <button
          type="button"
          onClick={() => {
            setSocialMediaLinks(SocialMediaLinks.slice(0, SocialMediaLinks.length - 1));
          }}
        >
          Remove Social Media Links
        </button> */}
        <br />
        {TopBeaches.map((beach, index) => (
          <div key={index}>
            <h2>Top Beaches</h2>
            <label>
              Description:<input
                type="text"
                value={beach.description}
                onChange={(e) => {
                  const newTopBeaches = [...TopBeaches];
                  newTopBeaches[index].description = e.target.value;
                  setTopBeaches(newTopBeaches);
                }}
              />
            </label>
            <br />
            <label>
              Image:<input
                type="text"
                value={beach.image}
                onChange={(e) => {
                  const newTopBeaches = [...TopBeaches];
                  newTopBeaches[index].image = e.target.value;
                  setTopBeaches(newTopBeaches);
                }}
              />
            </label>
            <br />
            <label>
              Name:<input
                type="text"
                value={beach.name}
                onChange={(e) => {
                  const newTopBeaches = [...TopBeaches];
                  newTopBeaches[index].name = e.target.value;
                  setTopBeaches(newTopBeaches);
                }}
              />
            </label>
            <br />
            <label>
              Place:<input
                type="text"
                value={beach.place}
                onChange={(e) => {
                  const newTopBeaches = [...TopBeaches];
                  newTopBeaches[index].place = e.target.value;
                  setTopBeaches(newTopBeaches);
                }}
              />
            </label>
            <br />
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            setTopBeaches([
              ...TopBeaches,
              {
                description: '',
                image: '',
                name: '',
                place: '',
              },
            ]);
          }}
        >
          Add Top Beaches
        </button>
        <br />
        {/* remove Top Beach */}
        <button
          type="button"
          onClick={() => {
            setTopBeaches(TopBeaches.slice(0, TopBeaches.length - 1));
          }}
        >
          Remove Top Beaches
        </button>
        <br />
        {TopsellingPackages.map((Toppackage, index) => (
          <div key={index}>
            <h2>Topselling Packages</h2>
            <label>
              Description:<input
                type="text"
                value={Toppackage.description}
                onChange={(e) => {
                  const newTopsellingPackages = [...TopsellingPackages];
                  newTopsellingPackages[index].description = e.target.value;
                  setTopsellingPackages(newTopsellingPackages);
                }}
              />
            </label>
            <br />
            <label>
              Image:<input
                type="text"
                value={Toppackage.image}
                onChange={(e) => {
                  const newTopsellingPackages = [...TopsellingPackages];
                  newTopsellingPackages[index].image = e.target.value;
                  setTopsellingPackages(newTopsellingPackages);
                }}
              />
            </label>
            <br />
            <label>
              Name:<input
                type="text"
                value={Toppackage.name}
                onChange={(e) => {
                  const newTopsellingPackages = [...TopsellingPackages];
                  newTopsellingPackages[index].name = e.target.value;
                  setTopsellingPackages(newTopsellingPackages);
                }}
              />
            </label>
            <br />
            <label>
              Price:<input
                type="text"
                value={Toppackage.price}
                onChange={(e) => {
                  const newTopsellingPackages = [...TopsellingPackages];
                  newTopsellingPackages[index].price = e.target.value;
                  setTopsellingPackages(newTopsellingPackages);
                }}
              />
            </label>
            <br />
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            setTopsellingPackages([
              ...TopsellingPackages,
              {
                description: '',
                image: '',
                name: '',
                price: '',
              },
            ]);
          }}
        >
          Add Topselling Packages
        </button>
        <br />
        {/* remove Topselling Package */}
        <button
          type="button"
          onClick={() => {
            setTopsellingPackages(TopsellingPackages.slice(0, TopsellingPackages.length - 1));
          }}
        >
          Remove Topselling Packages
        </button>
        <br />

        


        <button type="submit">Create Home</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Admin;




