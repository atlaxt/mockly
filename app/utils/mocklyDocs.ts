export const rawEndpointGroups: EndpointGroup[] = [
  {
    title: 'Users',
    icon: 'lucide:users',
    summary: 'Returns 10 realistic user profiles with contact and status fields.',
    details:
      'Each record ships with role, phone, avatar and location data. Filter the collection and pull details by ID to populate dashboards or onboarding flows.',
    routes: [
      {
        method: 'GET',
        path: '/users',
        description: 'Fetches the full user collection. The response is capped at 10 records with stable IDs.',
        curlBuilder: base => `curl -s ${base}/users | jq '.[0:2]'`,
        sampleResponse: `[
  {
    "id": 1,
    "name": "Atlas Yiğit Aydın",
    "email": "atlas@example.com",
    "role": "admin",
    "active": true
  },
  {
    "id": 2,
    "name": "Kübra Çetinkaya",
    "email": "kubra@example.com",
    "role": "admin",
    "active": true
  }
]`,
        demoPath: '/users',
      },
      {
        method: 'GET',
        path: '/users/{id}',
        description: 'Fetches a specific user by ID. Missing records return `{"error":"Kullanıcı bulunamadı"}` with status 200.',
        curlBuilder: base => `curl -s ${base}/users/1 | jq`,
        sampleResponse: `{
  "id": 1,
  "name": "Atlas Yiğit Aydın",
  "email": "atlas@example.com",
  "avatar": "https://github.com/atlaxt.png",
  "role": "admin",
  "registeredAt": "2023-03-15T10:32:00Z",
  "phone": "+90 555 111 11 11",
  "active": true,
  "address": {
    "city": "İstanbul",
    "country": "Türkiye"
  }
}`,
        tips: ['Request the collection first to discover valid IDs, then fetch profiles individually.'],
        demoPath: '/users/1',
      },
    ],
  },
  {
    title: 'Todos',
    icon: 'lucide:list-todo',
    summary: 'Mock backlog with priorities, ownership, tags and completion state.',
    details:
      'Use it to test list rendering, filtering and analytics scenarios. Every todo references a userId, so you can stitch relational views quickly.',
    routes: [
      {
        method: 'GET',
        path: '/todos',
        description: 'Delivers the complete todo backlog. Each item includes priority, tags, timestamps and completion state.',
        curlBuilder: base => `curl -s ${base}/todos | jq '.[0:2]'`,
        sampleResponse: `[
  {
    "id": 1,
    "userId": 1,
    "title": "Projeyi deploy et",
    "priority": "high",
    "completed": false
  },
  {
    "id": 2,
    "userId": 2,
    "title": "Kullanıcı kayıt sistemi ekle",
    "priority": "medium",
    "completed": false
  }
]`,
        demoPath: '/todos',
      },
      {
        method: 'GET',
        path: '/todos/{id}',
        description: 'Returns a todo by ID. Unknown IDs respond with `{"error":"Todo bulunamadı"}`.',
        curlBuilder: base => `curl -s ${base}/todos/3 | jq`,
        sampleResponse: `{
  "id": 3,
  "userId": 3,
  "title": "UI tasarımını gözden geçir",
  "description": "Mobil uyumluluk ve modernlik için UI'da son düzenlemeleri yap.",
  "completed": true,
  "priority": "low",
  "tags": [
    "UI",
    "responsive"
  ],
  "createdAt": "2025-07-14T17:15:00Z"
}`,
        demoPath: '/todos/3',
      },
    ],
  },
  {
    title: 'UUID Service',
    icon: 'lucide:key-round',
    summary: 'Generate UUID v1, v4 and v5 with query parameters.',
    details:
      'Default responses are version 4. Pass the `v` and `name` query parameters to explore deterministic outputs.',
    routes: [
      {
        method: 'GET',
        path: '/uuid',
        description: 'Produces a UUID v4 when no query parameter is provided.',
        curlBuilder: base => `curl -s ${base}/uuid | jq`,
        sampleResponse: `{
  "uuid": "1e0df5a5-095f-4e07-8d98-9c4f6c2b93d6",
  "version": 4
}`,
        demoPath: '/uuid',
      },
      {
        method: 'GET',
        path: '/uuid?v=1',
        description: 'Supplies a time-based UUID when `v=1`.',
        curlBuilder: base => `curl -s "${base}/uuid?v=1" | jq`,
        sampleResponse: `{
  "uuid": "5f78d0a0-2b3e-11ef-85f3-17625cc02f8d",
  "version": 1
}`,
        tips: ['UUID v1 embeds creation time, helpful for ordering without extra timestamps.'],
        demoPath: '/uuid?v=1',
      },
      {
        method: 'GET',
        path: '/uuid?v=5&name=mockly',
        description: 'Generates UUID v5. Requires a `name` value that is hashed inside the namespace.',
        curlBuilder: base => `curl -s "${base}/uuid?v=5&name=mockly" | jq`,
        sampleResponse: `{
  "uuid": "e51f94af-927d-5518-b7cd-47293d392c2f",
  "version": 5,
  "name": "mockly"
}`,
        tips: ['Reuse the same name to get deterministic identifiers for your fixtures.'],
        demoPath: '/uuid?v=5&name=mockly',
      },
    ],
  },
]

export const quickStartItems: QuickStartItem[] = [
  {
    title: 'No API key required',
    description: 'Every endpoint is publicly available. CORS headers are wide open by default.',
    icon: 'lucide:unlock',
  },
  {
    title: 'JSON first',
    description: 'Responses are raw JSON with the header `Content-Type: application/json`.',
    icon: 'lucide:braces',
  },
  {
    title: 'Realistic schema',
    description: 'Cities, roles, tags and timestamps mimic production-like datasets.',
    icon: 'lucide:sparkles',
  },
]

export const uuidParameters: UuidParameter[] = [
  {
    key: 'v',
    required: false,
    values: '`1`, `4`, `5`',
    note: 'Switch between UUID versions. The default is `4`.',
  },
  {
    key: 'name',
    required: false,
    values: 'Any string',
    note: 'Required when `v=5`. The value is hashed to produce deterministic IDs.',
  },
]

export function resolveEndpointGroups(baseApiUrl: string): ResolvedEndpointGroup[] {
  return rawEndpointGroups.map(group => ({
    ...group,
    routes: group.routes.map(({ curlBuilder, ...route }) => ({
      ...route,
      curl: curlBuilder(baseApiUrl),
    })),
  }))
}

export function buildIntegrationSnippet(baseApiUrl: string): string {
  return `import { onMounted, ref } from 'vue'

const users = ref([])

onMounted(async () => {
  const res = await fetch('${baseApiUrl}/users')
  users.value = await res.json()
})`
}
