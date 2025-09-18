declare global {

  export type ResolvedEndpointRoute = Omit<EndpointRoute, 'curlBuilder'> & { curl: string }
  export type ResolvedEndpointGroup = Omit<EndpointGroup, 'routes'> & { routes: ResolvedEndpointRoute[] }

  export interface EndpointRoute {
    method: string
    path: string
    description: string
    sampleResponse: string
    curlBuilder: (base: string) => string
    tips?: string[]
    demoPath?: string
  }

  export interface EndpointGroup {
    title: string
    icon: string
    summary: string
    details: string
    routes: EndpointRoute[]
  }

  export interface QuickStartItem {
    title: string
    description: string
    icon: string
  }

  export interface UuidParameter {
    key: string
    required: boolean
    values: string
    note: string
  }

  export interface LandingFeature {
    title: string
    description: string
    icon: string
  }

  export interface PreviewOption {
    label: string
    description: string
    path: string
    method: string
  }

}
