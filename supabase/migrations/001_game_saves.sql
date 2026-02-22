-- game_saves: stores per-user game state
create table if not exists game_saves (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  save_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now() not null,
  created_at timestamptz default now() not null,

  constraint game_saves_user_unique unique (user_id)
);

-- Enable Row Level Security
alter table game_saves enable row level security;

-- Users can only read their own saves
create policy "Users can read own saves"
  on game_saves for select
  using (auth.uid() = user_id);

-- Users can insert their own saves
create policy "Users can insert own saves"
  on game_saves for insert
  with check (auth.uid() = user_id);

-- Users can update their own saves
create policy "Users can update own saves"
  on game_saves for update
  using (auth.uid() = user_id);

-- Users can delete their own saves
create policy "Users can delete own saves"
  on game_saves for delete
  using (auth.uid() = user_id);

-- Index for fast lookup by user
create index if not exists idx_game_saves_user_id on game_saves(user_id);
