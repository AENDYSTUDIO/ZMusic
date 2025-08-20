"use client";

import { useSession } from "next-auth/react";
import { MainLayout } from "@/components/layout";
import { Music, Play, ListMusic } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to ZMusic</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {session 
              ? "Discover, stream, and share music in a decentralized way" 
              : "Sign in to access your music library and start streaming"
            }
          </p>
          <div className="flex justify-center space-x-4">
            {!session ? (
              <button 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => window.location.href = "/auth/signin"}
              >
                Sign In
              </button>
            ) : (
              <>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Browse Music
                </button>
                <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  Upload Your Music
                </button>
              </>
            )}
          </div>
        </div>

        {/* Featured Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Featured</h2>
          
          {/* Trending Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-card rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Music className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-1">Track Title {item}</h3>
                <p className="text-sm text-muted-foreground mb-2">Artist Name</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">2:30</span>
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Playlists */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Popular Playlists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-card rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <ListMusic className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-1">Playlist {item}</h3>
                  <p className="text-sm text-muted-foreground mb-2">Curated by User</p>
                  <p className="text-xs text-muted-foreground">24 tracks • 1h 30m</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}