# @zanejs/vite-config


<div align="center">
  <a href="https://zanejs.com"><img alt="zanejs logo" width="215" src="https://unpkg.com/@zanejs/icons@1.0.1/dist/logo.svg"></a>

[![NPM version](https://img.shields.io/npm/v/@zanejs/vite-config)](https://npmjs.com/package/@zanejs/vite-config)


  **中文** | [English](./README.md)
</div>

# 简介

开箱即用的 Vite 配置库，支持应用程序和库两种项目类型。

## 特性

- **开箱即用**: 零配置或少量配置即可快速上手
- **双模式支持**: 支持应用程序和库两种项目类型
- **丰富插件**: 内置多种实用 Vite 插件
- **环境变量**: 自动加载环境变量并转换为配置
- **类型安全**: 完整的 TypeScript 类型支持

## 安装

```bash
pnpm add -D @zanejs/vite-config
```

## 使用方法

### 基础用法

在 `vite.config.ts` 中直接使用：

```typescript
import { defineConfig } from '@zanejs/vite-config';

export default defineConfig();
```

### 应用程序配置

对于 Web 应用程序项目：

```typescript
import { defineConfig } from '@zanejs/vite-config';

export default defineConfig((config) => {
  return {
    application: {
      // 应用程序配置选项
      i18n: true,
      pwa: true,
      devtools: true,
    },
    vite: {
      // Vite 原生配置
    }
  };
});
```

### 库配置

对于组件库或工具库项目：

```typescript
import { defineConfig } from '@zanejs/vite-config';

export default defineConfig((config) => {
  return {
    library: {
      // 库配置选项
      dts: true,
    },
    vite: {
      // Vite 原生配置
    }
  };
});
```

### 手动指定项目类型

```typescript
import { defineConfig } from '@zanejs/vite-config';

// 强制作为应用程序
export default defineConfig(undefined, 'application');

// 强制作为库
export default defineConfig(undefined, 'library');

// 自动检测（默认）
export default defineConfig(undefined, 'auto');
```

## 配置选项

### 通用选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `devtools` | `boolean` | `true` | 是否启用 Vue DevTools |
| `injectMetadata` | `boolean` | `true` | 是否注入项目元数据 |
| `isBuild` | `boolean` | - | 是否为构建模式（自动设置） |
| `mode` | `string` | - | 运行环境模式（自动设置） |
| `visualizer` | `boolean` | `false` | 是否开启构建分析可视化 |

### 应用程序选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `i18n` | `boolean` | `true` | 是否启用 Vue I18n |
| `pwa` | `boolean` | `true` | 是否启用 PWA |
| `html` | `boolean` | `true` | 是否启用 HTML 插件 |
| `compress` | `boolean` | `false` | 是否启用 gzip/brotli 压缩 |
| `compressTypes` | `Array<'brotli' \| 'gzip'>` | `['brotli', 'gzip']` | 压缩类型 |
| `archiver` | `boolean` | `true` | 是否启用归档打包 |
| `injectAppLoading` | `boolean` | `true` | 是否注入应用加载动画 |
| `license` | `boolean` | `true` | 是否注入版权信息 |
| `nitroMock` | `boolean` | `true` (开发模式) | 是否启用 Nitro Mock |
| `print` | `boolean` | `true` (开发模式) | 是否启用控制台打印 |
| `vxeTableLazyImport` | `boolean` | `true` | 是否启用 VXE-Table 懒加载 |
| `importmap` | `boolean` | `false` | 是否启用 Importmap CDN |
| `extraAppConfig` | `boolean` | `true` | 是否抽离配置文件 |
| `injectGlobalScss` | `boolean` | `true` | 是否注入全局 SCSS |

### 库选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `dts` | `boolean` | `false` | 是否生成 TypeScript 声明文件 |

## 环境变量

支持通过 `.env` 文件配置以下变量：

| 变量名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `VITE_APP_TITLE` | `string` | `'ZaneJS Application'` | 应用标题 |
| `VITE_BASE` | `string` | `'/'` | 应用基础路径 |
| `VITE_PORT` | `number` | `5173` | 开发服务器端口 |
| `VITE_DEVTOOLS` | `boolean` | `true` | 是否启用 DevTools |
| `VITE_PWA` | `boolean` | `true` | 是否启用 PWA |
| `VITE_COMPRESS` | `string` | `''` | 压缩类型，多个用逗号分隔 |
| `VITE_ARCHIVER` | `boolean` | `true` | 是否启用归档 |
| `VITE_NITRO_MOCK` | `boolean` | `true` (开发模式) | 是否启用 Mock |
| `VITE_INJECT_APP_LOADING` | `boolean` | `true` | 是否注入加载动画 |
| `VITE_VISUALIZER` | `boolean` | `false` | 是否开启分析可视化 |

## 内置插件

| 插件 | 功能 |
|------|------|
| `@vitejs/plugin-vue` | Vue 3 支持 |
| `@vitejs/plugin-vue-jsx` | Vue JSX 支持 |
| `@intlify/unplugin-vue-i18n` | Vue I18n |
| `vite-plugin-pwa` | PWA 支持 |
| `vite-plugin-vue-devtools` | Vue DevTools |
| `vite-plugin-compression` | gzip/brotli 压缩 |
| `vite-plugin-html` | HTML 压缩 |
| `vite-plugin-dts` | TypeScript 声明文件 |
| `rollup-plugin-visualizer` | 构建分析 |
| `archiver` | 归档打包 |

## 示例

### 完整配置示例

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
      // 自定义 Vite 配置
    }
  };
});
```

### 库配置示例

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
