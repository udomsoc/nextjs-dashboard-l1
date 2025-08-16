## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

---

## 1. Create a Supabase database table

When your project is up and running, click [Open in Supabase](https://nextjs.org/...) button, go to the Table Editor, create a new table and insert some data.

Alternatively, you can run the following snippet in your project's SQL Editor. This will create a countries table with some sample data.

-- Create the table
create table notes (
id bigint primary key generated always as identity,
title text not null
);

-- Insert some sample data into the table
insert into notes (title)
values
('Today I created a Supabase project.'),
('I added some data and queried it from Next.js.'),
('It was awesome!');

alter table notes enable row level security;

---

create policy "public can read countries"
on public.notes
for select to anon
using (true);

## 2. Create a Next.js app

Use the create-next-app command and the with-supabase template, to create a Next.js app pre-configured with:

- Cookie-based Auth https://supabase.com/docs/guides/auth/auth-helpers/nextjs
- TypeScript https://www.typescriptlang.org/
- Tailwind CSS https://tailwindcss.com/

## 3. Connect to a project

Start by connecting to your existing project and then run
vercel link
in the CLI to link to the project locally.

## 4. Pull your latest environment variables

Run
vercel env pull .env.development.local
to make the latest environment variables available to your project locally.

## 5. Query Supabase data from Next.js

Create a new file at app/notes/page.tsx and populate with the following.

import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
const supabase = await createClient();
const { data: notes } = await supabase.from("notes").select();

return <pre>{JSON.stringify(notes, null, 2)}</pre>
}

This will select all the rows from the notes table in Supabase and render them on the page.

## 6. Start the app

Run the development server with npm run dev, go to http://localhost:3000/notes in a browser and you should see the list of notes.
