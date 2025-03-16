export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      favorites: {
        Row: {
          created_at: string
          id: string
          meditation_id: string | null
          user_id: string
          yoga_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          meditation_id?: string | null
          user_id?: string
          yoga_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          meditation_id?: string | null
          user_id?: string
          yoga_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_mediation_id_fkey"
            columns: ["meditation_id"]
            isOneToOne: false
            referencedRelation: "meditation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_yoga_id_fkey"
            columns: ["yoga_id"]
            isOneToOne: false
            referencedRelation: "yoga"
            referencedColumns: ["id"]
          },
        ]
      }
      meditation: {
        Row: {
          audio_url: string
          category_id: string | null
          created_at: string
          description: string
          duration: string
          id: string
          image_url: string
          name: string
          video_url: string | null
        }
        Insert: {
          audio_url: string
          category_id?: string | null
          created_at?: string
          description: string
          duration: string
          id?: string
          image_url: string
          name: string
          video_url?: string | null
        }
        Update: {
          audio_url?: string
          category_id?: string | null
          created_at?: string
          description?: string
          duration?: string
          id?: string
          image_url?: string
          name?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meditation_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "meditation_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      meditation_categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      meditation_videos: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          thumbnail: string | null
          url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          thumbnail?: string | null
          url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          thumbnail?: string | null
          url?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          first_name: string
          id: string
          last_name: string | null
        }
        Insert: {
          first_name: string
          id: string
          last_name?: string | null
        }
        Update: {
          first_name?: string
          id?: string
          last_name?: string | null
        }
        Relationships: []
      }
      yoga: {
        Row: {
          category_id: string | null
          created_at: string
          description: string
          difficulty: Database["public"]["Enums"]["yoga_difficulty"]
          difficulty_id: string
          duration: string | null
          id: string
          image_url: string
          name: string
          video_url: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          description: string
          difficulty?: Database["public"]["Enums"]["yoga_difficulty"]
          difficulty_id: string
          duration?: string | null
          id?: string
          image_url: string
          name: string
          video_url: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          description?: string
          difficulty?: Database["public"]["Enums"]["yoga_difficulty"]
          difficulty_id?: string
          duration?: string | null
          id?: string
          image_url?: string
          name?: string
          video_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "yoga_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "yoga_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      yoga_categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      yoga_category_binaural: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          thumbnail: string | null
          url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          thumbnail?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          thumbnail?: string | null
          url?: string | null
        }
        Relationships: []
      }
      yoga_category_mantra: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          thumbnail: string | null
          url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          thumbnail?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          thumbnail?: string | null
          url?: string | null
        }
        Relationships: []
      }
      yoga_category_piano: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          thumbnail: string | null
          url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          thumbnail?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          thumbnail?: string | null
          url?: string | null
        }
        Relationships: []
      }
      yoga_videos: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          thumbnail: string | null
          url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          thumbnail?: string | null
          url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          thumbnail?: string | null
          url?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      yoga_difficulty: "beginner" | "intermediate" | "expert"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
