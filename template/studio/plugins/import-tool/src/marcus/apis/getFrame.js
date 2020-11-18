/* eslint-disable quotes */
import {find} from 'lodash'

export default async function getFrame (data, uri) {
  // Get object type before framing
  const frameBase = (data) => {
    let res = {}
    if (data['@graph']) {
      res = find(data['@graph'], function (o) {
        return o['@id'] === uri
      })
    } else {
      res = find(data, function (o) {
        return o['@id'] === uri
      })
    }
    return res
  }

  const frameType = frameBase(data)
  const type = frameType['@type']

  let frame = {
    "@context": {
      "id": "@id",
      "type": "@type",
      "value": "@value",
      "spatial": {
        "@id": "http://purl.org/dc/terms/spatial"
      },
      "subject": {
        "@id": "http://purl.org/dc/terms/subject"
      },
      "title": {
        "@id": "http://purl.org/dc/terms/title"
      },
      "depicts": {
        "@id": "http://xmlns.com/foaf/0.1/depicts"
      },
      "maker": {
        "@id": "http://xmlns.com/foaf/0.1/maker"
      },
      "homepage": {
        "@id": "http://data.ub.uib.no/ontology/homepage"
      },
      "image": {
        "@id": "http://data.ub.uib.no/ontology/image"
      },
      "label": {
        "@id": "http://www.w3.org/2000/01/rdf-schema#label"
      },
      "description": {
        "@id": "http://purl.org/dc/elements/1.1/description"
      },
      "identifier": {
        "@id": "http://purl.org/dc/terms/identifier"
      },
      "seeAlso": {
        "@id": "http://www.w3.org/2000/01/rdf-schema#seeAlso",
        "@type": "@id"
      },
      "sc": "http://iiif.io/api/presentation/3#",
      "oa": "http://www.w3.org/ns/oa#",
      "dct": "http://purl.org/dc/terms/",
      "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "ubbont": "http://data.ub.uib.no/ontology/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "dc": "http://purl.org/dc/elements/1.1/",
      "bibo": "http://purl.org/ontology/bibo/"
    },
    "@type": type
  }

  return frame
}
