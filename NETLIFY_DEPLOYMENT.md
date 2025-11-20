# CookForMe - Netlify ile Ücretsiz Deployment

## 🚀 Netlify Nedir?

Netlify, Vercel'e alternatif, tamamen ücretsiz ve kolay bir hosting platformudur. Next.js uygulamaları için mükemmel çalışır.

---

## Adım 1: Netlify Hesabı Oluşturma

1. [https://www.netlify.com](https://www.netlify.com) adresine gidin
2. "Sign up" butonuna tıklayın
3. GitHub hesabınızla giriş yapın

---

## Adım 2: Projeyi GitHub'a Yükleme

Eğer henüz GitHub'a yüklemediyseniz:

```bash
cd "/Users/mustafacaliskan/Library/Mobile Documents/com~apple~CloudDocs/Dersler/AD 432/web app/cookforme-mvp"

# Git repository başlat
git init

# .gitignore oluştur (eğer yoksa)
echo "node_modules
.next
.env.local
.DS_Store" > .gitignore

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit - CookForMe MVP"
```

**GitHub'da yeni repository oluşturun:**
1. [https://github.com/new](https://github.com/new) adresine gidin
2. Repository adı: `cookforme-mvp`
3. **Public** seçin (ücretsiz plan için gerekli)
4. "Create repository" butonuna tıklayın

**Kodu GitHub'a push edin:**
```bash
# Kendi GitHub kullanıcı adınızı yazın
git remote add origin https://github.com/KULLANICI_ADINIZ/cookforme-mvp.git
git branch -M main
git push -u origin main
```

---

## Adım 3: Netlify'da Deploy

### 3.1 Site "Import"

1. Netlify dashboard'da **"Add new site"** > **"Import an existing project"**
2. **"Deploy with GitHub"** seçin
3. Repository'nizi seçin: `cookforme-mvp`

### 3.2 Build Settings

Netlify otomatik algılar ama kontrol edin:

```
Build command: npm run build
Publish directory: .next
```

### 3.3 Environment Variables Ekleyin

**"Advanced build settings"** > **"New variable"** butonuna tıklayın:

```
NEXT_PUBLIC_SUPABASE_URL = your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-supabase-anon-key
```

### 3.4 Deploy

"Deploy site" butonuna tıklayın!

⏱️ **İlk deployment:** ~3-5 dakika

---

## ✅ Site Canlıda!

Deploy tamamlandığında ücretsiz URL alacaksınız:
```
https://random-name-123.netlify.app
```

---

## 🔧 Site Adını Değiştirme

1. Site settings > **"Site details"**
2. **"Change site name"**
3. Örnek: `cookforme-mvp.netlify.app`

---

## 🌐 Domain Bağlama

### Seçenek 1: Ücretsiz Netlify Subdomain

Netlify otomatik verir:
- `cookforme-mvp.netlify.app`

### Seçenek 2: Kendi Domain'iniz

#### A) Domain Satın Alma

**Önerilen ucuz domain sağlayıcılar:**

1. **Porkbun** - [https://porkbun.com](https://porkbun.com)
   - `.com`: ~$9/yıl
   - `.app`: ~$15/yıl
   - En ucuz seçenek

2. **NameCheap** - [https://www.namecheap.com](https://www.namecheap.com)
   - `.com`: ~$10-12/yıl
   - İlk yıl indirimli

3. **Cloudflare** - [https://www.cloudflare.com/products/registrar/](https://www.cloudflare.com/products/registrar/)
   - Maliyet fiyatına (~$9-10/yıl)
   - Gizli ücret yok

**Önerilen domain isimleri:**
- `cookformee.com`
- `cookfor.me`
- `cookforme.app`
- `cookforme.co`

#### B) Domain'i Netlify'e Bağlama

**Netlify'da:**
1. Site settings > **"Domain management"**
2. **"Add custom domain"**
3. Domain adınızı girin (örn: `cookforme.com`)

**Domain sağlayıcınızda DNS ayarları:**

Netlify size DNS kayıtları verecek:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: cookforme-mvp.netlify.app
```

**SSL (HTTPS):** Netlify otomatik olarak ücretsiz SSL sertifikası verir! 🔒

---

## 🔄 Güncellemeleri Deploy Etme

Çok basit! Sadece GitHub'a push edin:

```bash
git add .
git commit -m "Değişiklik yaptım"
git push
```

Netlify **otomatik olarak** yeni değişiklikleri deploy eder! 🎉

---

## 💡 Netlify vs Vercel Karşılaştırması

| Özellik | Netlify | Vercel |
|---------|---------|--------|
| Ücretsiz Tier | ✅ Var | ✅ Var |
| Next.js Desteği | ✅ Mükemmel | ✅ Mükemmel |
| Build Süresi | ~3-5 dk | ~2-3 dk |
| Otomatik SSL | ✅ Ücretsiz | ✅ Ücretsiz |
| Bandwidth (Ücretsiz) | 100 GB/ay | 100 GB/ay |
| Deploy Sayısı | Sınırsız | Sınırsız |

**Sonuç:** İkisi de mükemmel, hangisini isterseniz onu kullanabilirsiniz!

---

## 🚨 Netlify'da Next.js için Özel Ayar

`netlify.toml` dosyası oluşturun (proje ana dizininde):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Bu dosyayı oluşturduktan sonra:
```bash
git add netlify.toml
git commit -m "Add Netlify config"
git push
```

---

## 📊 Supabase Entegrasyonu

Deployment'tan önce:

1. [Supabase](https://supabase.com) hesabı oluşturun
2. Yeni proje açın
3. `SUPABASE_SETUP.md` dosyasındaki SQL'i çalıştırın
4. API credentials'ları Netlify environment variables'a ekleyin

---

## ⚠️ Önemli Notlar

1. **Public Repository:** Ücretsiz planlar için GitHub repo public olmalı
2. **Environment Variables:** Netlify dashboard'dan ekleyin (güvenli)
3. **Build Logs:** Deploy başarısız olursa Netlify loglarını kontrol edin
4. **Custom Domain:** DNS değişikliği 5-30 dakika sürebilir

---

## 🎯 Özet

✅ **Hosting:** Ücretsiz (Netlify)  
✅ **Database:** Ücretsiz (Supabase)  
✅ **SSL/HTTPS:** Ücretsiz (Netlify otomatik)  
✅ **Otomatik Deploy:** Ücretsiz  
💰 **Domain (opsiyonel):** ~$9-12/yıl  

**Toplam maliyet:** $0 (domain olmadan) veya ~$10/yıl (domain ile)

---

## 🆘 Sorun Giderme

**Build Hatası Alıyorsanız:**
1. Netlify deploy logs'ları kontrol edin
2. Local'de `npm run build` çalıştırın
3. Hata varsa düzeltin ve tekrar push edin

**Site yavaş yükleniyor:**
- İlk ziyaret biraz yavaş olabilir
- Sonraki yüklemeler çok hızlı olacak (CDN cache)

**Environment variables çalışmıyor:**
- Netlify dashboard'da tekrar kontrol edin
- Site'ı redeploy edin (Deploys > Trigger deploy)
