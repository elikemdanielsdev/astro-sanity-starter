/* empty css                                */
import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"oj31mwik","dataset":"production","useCdn":true}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
