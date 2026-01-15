# @zanejs/vite-config


<div align="center">
  <a href="https://zanejs.com"><img alt="zanejs logo" width="215" src="https://unpkg.com/@zanejs/icons@1.0.1/dist/logo.svg"></a>

  [![NPM version](https://img.shields.io/npm/v/@zanejs/vite-config)](https://npmjs.com/package/@zanejs/vite-config)

  **English** | [中文](./README.zh-CN.md)
</div>

# Introduction

Out-of-the-box Vite configuration library supporting both application and library project types.

## Features

- **Ready to Use**: Quick start with zero or minimal configuration
- **Dual Mode Support**: Supports both application and library project types
- **Rich Plugins**: Built-in practical Vite plugins
- **Environment Variables**: Auto-load environment variables and convert to configuration
- **Type Safety**: Complete TypeScript type support

## Installation

```bash
pnpm add -D @zanejs/vite-config
```

## Usage

### Basic Usage

Use directly in `vite.config.ts`:

```typescript
import { defineConfig } from '@zanejs/vite-config';

export default defineConfig();
```

### Application Configuration

For web application projects:

```typescript
import { defineConfig } from '@zanejs/vite-config';

export default defineConfig((config) => {
  return {
    application: {
      // Application configuration options
      i18n: true,
      pwa: true,
      devtools: true,
    },
    vite: {
      // Vite native configuration
    }
  };
});
```

### Library Configuration

For component libraries or utility libraries:

```typescript
import { defineConfig } from '@zanejs/vite-config';

export default defineConfig((config) => {
  return {
    library: {
      // Library configuration options
      dts: true,
    },
    vite: {
      // Vite native configuration
    }
  };
});
```

### Manually Specifying Project Type

```typescript
import { defineConfig } from '@zanejs/vite-config';

// Force as application
export default defineConfig(undefined, 'application');

// Force as library
export default defineConfig(undefined, 'library');

// Auto-detect (default)
export default defineConfig(undefined, 'auto');
```

## Configuration Options

### Common Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `devtools` | `boolean` | `true` | Enable Vue DevTools |
| `injectMetadata` | `boolean` | `true` | Inject project metadata |
| `isBuild` | `boolean` | - | Build mode flag (auto-set) |
| `mode` | `string` | - | Environment mode (auto-set) |
| `visualizer` | `boolean` | `false` | Enable build analysis visualization |

### Application Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `i18n` | `boolean` | `true` | Enable Vue I18n |
| `pwa` | `boolean` | `true` | Enable PWA |
| `html` | `boolean` | `true` | Enable HTML plugin |
| `compress` | `boolean` | `false` | Enable gzip/brotli compression |
| `compressTypes` | `Array<'brotli' \| 'gzip'>` | `['brotli', 'gzip']` | Compression types |
| `archiver` | `boolean` | `true` | Enable archive packaging |
| `injectAppLoading` | `boolean` | `true` | Inject app loading animation |
| `license` | `boolean` | `true` | Inject license information |
| `nitroMock` | `boolean` | `true` (dev mode) | Enable Nitro Mock |
| `print` | `boolean` | `true` (dev mode) | Enable console printing |
| `vxeTableLazyImport` | `boolean` | `true` | Enable VXE-Table lazy loading |
| `importmap` | `boolean` | `false` | Enable Importmap CDN |
| `extraAppConfig` | `boolean` | `true` | Extract configuration file |
| `injectGlobalScss` | `boolean` | `true` | Inject global SCSS |

### Library Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `dts` | `boolean` | `false` | Generate TypeScript declaration files |

## Environment Variables

Support configuring the following variables via `.env` files:

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `VITE_APP_TITLE` | `string` | `'ZaneJS Application'` | Application title |
| `VITE_BASE` | `string` | `'/'` | Application base path |
| `VITE_PORT` | `number` | `5173` | Dev server port |
| `VITE_DEVTOOLS` | `boolean` | `true` | Enable DevTools |
| `VITE_PWA` | `boolean` | `true` | Enable PWA |
| `VITE_COMPRESS` | `string` | `''` | Compression types, comma-separated |
| `VITE_ARCHIVER` | `boolean` | `true` | Enable archive |
| `VITE_NITRO_MOCK` | `boolean` | `true` (dev mode) | Enable Mock |
| `VITE_INJECT_APP_LOADING` | `boolean` | `true` | Inject loading animation |
| `VITE_VISUALIZER` | `boolean` | `false` | Enable analysis visualization |

## Built-in Plugins

| Plugin | Feature |
|--------|---------|
| `@vitejs/plugin-vue` | Vue 3 Support |
| `@vitejs/plugin-vue-jsx` | Vue JSX Support |
| `@intlify/unplugin-vue-i18n` | Vue I18n |
| `vite-plugin-pwa` | PWA Support |
| `vite-plugin-vue-devtools` | Vue DevTools |
| `vite-plugin-compression` | gzip/brotli Compression |
| `vite-plugin-html` | HTML Compression |
| `vite-plugin-dts` | TypeScript Declaration Files |
| `rollup-plugin-visualizer` | Build Analysis |
| `archiver` | Archive Packaging |

## Examples

### Complete Configuration Example

```typescript
import { defineConfig } from '@zanejs/vite-config';

export default defineConfig(async (config) => {
  const { command, mode } = config;
  const isBuild = command === 'build';

  return {
    application: {
      i18n: true,
      pwa: true,
      devtools: !isBuild,
      compress: isBuild,
      compressTypes: ['brotli', 'gzip'],
      archiver: isBuild,
      injectAppLoading: true,
      nitroMock: !isBuild,
      print: !isBuild,
      vxeTableLazyImport: true,
      printInfoMap: {
        'My App Docs': 'https://example.com/docs',
      },
      pwaOptions: {
        manifest: {
          name: 'My Application',
          short_name: 'MyApp',
        },
      },
    },
    vite: {
      // Custom Vite configuration
    }
  };
});
```

### Library Configuration Example

```typescript
import { defineConfig } from '@zanejs/vite-config';

export default defineConfig(async (config) => {
  return {
    library: {
      dts: true,
      devtools: false,
    },
    vite: {
      build: {
        lib: {
          entry: 'src/index.ts',
          name: 'MyLib',
          fileName: 'my-lib',
        },
      },
    }
  };
});
```

## License

MIT
