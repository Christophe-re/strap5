import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_rows';
  info: {
    displayName: 'row';
    icon: 'arrowRight';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedPushHotel extends Struct.ComponentSchema {
  collectionName: 'components_shared_push_hotels';
  info: {
    displayName: 'pushHotel';
    icon: 'gate';
  };
  attributes: {
    hotels: Schema.Attribute.Relation<'oneToMany', 'api::hotel.hotel'>;
  };
}

export interface SharedPushHotelByGamme extends Struct.ComponentSchema {
  collectionName: 'components_shared_push_hotel_by_gammes';
  info: {
    displayName: 'PushHotelByGamme';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    pushHotel: Schema.Attribute.Component<'shared.push-hotel', false>;
    title: Schema.Attribute.String;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedHomeHotelHighlighting extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_hotel_highlightings';
  info: {
    displayName: 'HomeHotelHighlighting';
    icon: 'crown';
  };
  attributes: {
    pushHotelByGamme: Schema.Attribute.Component<
      'shared.push-hotel-by-gamme',
      true
    >;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'banner';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    TitleBaner: Schema.Attribute.Text;
    ImgBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.row': SharedRow;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.push-hotel': SharedPushHotel;
      'shared.push-hotel-by-gamme': SharedPushHotelByGamme;
      'shared.media': SharedMedia;
      'shared.home-hotel-highlighting': SharedHomeHotelHighlighting;
      'shared.card': SharedCard;
      'shared.banner': SharedBanner;
    }
  }
}
