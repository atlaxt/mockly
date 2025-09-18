export const landingFeatures: LandingFeature[] = [
  {
    title: 'Plug-and-play endpoints',
    description: 'Drop the base URL into your app and start consuming mock data instantly.',
    icon: 'lucide:zap',
  },
  {
    title: 'Consistent fixtures',
    description: 'Static datasets help you write deterministic tests and demos.',
    icon: 'lucide:layers',
  },
  {
    title: 'Performance-friendly',
    description: 'Simple JSON responses keep your prototyping workflows fast.',
    icon: 'lucide:timer',
  },
]

export const previewOptions: PreviewOption[] = [
  {
    label: 'Users (collection)',
    description: 'Ten ready-to-use profiles for onboarding flows and admin views.',
    path: '/users',
    method: 'GET',
  },
  {
    label: 'Todos (single item)',
    description: 'A detailed todo record to demonstrate relational data.',
    path: '/todos/3',
    method: 'GET',
  },
  {
    label: 'UUID v5',
    description: 'Generate deterministic UUIDs with version 5 and a sample name.',
    path: '/uuid?v=5&name=mockly',
    method: 'GET',
  },
]
