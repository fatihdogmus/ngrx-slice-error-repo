import { createSlice, PayloadAction } from "ngrx-slice";

export interface KullaniciState {
  tcKimlikNumarasi: string;
  hesapAktifMi: boolean;
  kayitliKullaniciMi: boolean;
  yetkiler: string[];
}


export const kullaniciInitialState: KullaniciState = {
  tcKimlikNumarasi: "",
  hesapAktifMi: false,
  kayitliKullaniciMi: false,
  yetkiler: []
};

const slice = createSlice({
  name: "kullanici",
  initialState: kullaniciInitialState,
  reducers: {
    kullaniciBilgileriEkle(state, payload: PayloadAction<KullaniciState>) {
      state.tcKimlikNumarasi = payload.tcKimlikNumarasi;
      state.yetkiler = payload.yetkiler;
      state.hesapAktifMi = payload.hesapAktifMi;
      state.kayitliKullaniciMi = payload.kayitliKullaniciMi;
    }
  }
});

export const KullaniciActions = slice.KullaniciActions;
export const KullaniciSelectors = slice.KullaniciSelectors;
export const KullaniciFeature = slice.KullaniciFeature;
