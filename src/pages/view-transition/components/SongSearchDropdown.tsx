import { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import TextInput from "../../../components/ui/TextInput";

export interface Song {
  id: number;
  soundcloud_song_id: number;
  title: string;
  artist_name: string;
  album_cover_img_url: string;
}

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onSelect: (song: Song) => void;
}

interface SoundCloudTrack {
  id: number;
  title: string;
  artist: string;
  artwork_url: string;
}

export default function TrackSearchInput({ label, value, onChange, onSelect }: Props) {
  const [results, setResults] = useState<SoundCloudTrack[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const searchTracks = async (query: string) => {
    if (!query) {
      setResults([]);
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:8000/soundcloud/search?query=${encodeURIComponent(query)}`
      );
      const data: SoundCloudTrack[] = await res.json();
      setResults(data);
      setShowDropdown(true);
    } catch (err) {
      console.error("Search failed", err);
      setResults([]);
    }
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((q: string) => searchTracks(q), 300),
    []
  );

  const handleChange = (val: string) => {
    onChange(val);
    debouncedSearch(val);
  };

  const selectTrack = (track: SoundCloudTrack) => {
    const song: Song = {
      id: 0,
      soundcloud_song_id: track.id,
      title: track.title,
      artist_name: track.artist,
      album_cover_img_url: track.artwork_url ?? ""
    };
    onSelect(song);
    setResults([]);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full">
      <TextInput
        label={label}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full"
        required
      />

      {showDropdown && results.length > 0 && (
        <div className="absolute z-50 w-full bg-white shadow-lg rounded max-h-60 overflow-y-auto">
          {results.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => selectTrack(t)}
            >
              {t.artwork_url && (
                <img
                  src={t.artwork_url.replace("large", "t500x500")}
                  className="w-10 h-10 object-cover rounded"
                />
              )}
              <div>
                <div className="text-sm font-medium">{t.title}</div>
                <div className="text-xs text-gray-500">{t.artist}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}