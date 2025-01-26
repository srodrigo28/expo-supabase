#### Expo + Supabase

#### dependências
* supabase
```
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @rneui/themed react-native-url-polyfill
```

#### Supabase

```
-- inserts a row into public.profiles
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.users (id, name)
  values (new.id, new.raw_user_meta_data ->> 'name');
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger createAuthUser
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```


#### Supabase Functions
```
drop trigger "createAuthUser" on "auth.users";
```

#### Ref.
```
https://www.youtube.com/watch?v=SXjJX9T0QJY&t=9s
```

```
https://www.youtube.com/watch?v=a_EdG30oGQI
```