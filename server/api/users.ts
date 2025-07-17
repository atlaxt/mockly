export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')

  return [
    { id: 1, name: 'Atlas Yiğit Aydın', email: 'atlas@example.com' },
    { id: 2, name: 'Ayşe Demir', email: 'ayse@example.com' },
    { id: 3, name: 'Mehmet Kaya', email: 'mehmet@example.com' },
    { id: 4, name: 'Fatma Şahin', email: 'fatma@example.com' },
    { id: 5, name: 'Can Yıldız', email: 'can@example.com' },
    { id: 6, name: 'Elif Arslan', email: 'elif@example.com' },
    { id: 7, name: 'Okan Koç', email: 'okan@example.com' },
    { id: 8, name: 'Zeynep Kurt', email: 'zeynep@example.com' },
    { id: 9, name: 'Serkan Acar', email: 'serkan@example.com' },
    { id: 10, name: 'Gül Yalçın', email: 'gul@example.com' },
  ]
})
