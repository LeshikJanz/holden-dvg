## Deployment

```
git clone git@github.com:azimgd/template.git
cd template
cp .env.example .env
yarn
cd src/template
git clone git@github.com:rainventuresAU/dealx-frontend.git
cd dealx-frontend
yarn
cd ../../../
nano .env # [TEMPLATE=dealx-frontend]
yarn
```

## Setting default filters
Create a global variable object to set default filter values.
```
DEFAULT_FILTERS = {
  MAKE: 'Bmw',
  MODEL: 'x5',
  LOCASI: 'default',
  CONDITION: 'all',
  CATEGORY: 'All Cars',
};
```

| Locasi        | Category                  | Condition     |
| ------------- | ------------------------- | ------------- |
| burswood      | All Cars                  | all           |
| goldymidland  | Small Cars                | new           |
| maddington    | Mid and Large Sedans      | used          |
| melville      | Station Wagons            | demo          |
| midland       | Luxury Vehicles           |               |
| morley        | Performance Vehicles      |               |
| prosser       | Hatch/Wagon Crossovers    |               |
| wanneroo      | Mid-sized and Family SUVs |               |
| midlandtoyota | Large SUVs and Wagons     |               |
|               | Utes and Traybacks        |               |
|               | Vans                      |               |
|               | People Movers             |               |
