# `provider`

Refer to the Terraform Registory for docs: [`gitlab`](https://www.terraform.io/docs/providers/gitlab).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-gitlab.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitlabProvider <a name="GitlabProvider" id="@cdktf/provider-gitlab.provider.GitlabProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab gitlab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-gitlab'

new provider.GitlabProvider(scope: Construct, id: string, config?: GitlabProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig">GitlabProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig">GitlabProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile">resetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck">resetEarlyAuthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.provider.GitlabProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetCacertFile` <a name="resetCacertFile" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile"></a>

```typescript
public resetCacertFile(): void
```

##### `resetClientCert` <a name="resetClientCert" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert"></a>

```typescript
public resetClientCert(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetEarlyAuthCheck` <a name="resetEarlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck"></a>

```typescript
public resetEarlyAuthCheck(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-gitlab'

provider.GitlabProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-gitlab'

provider.GitlabProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-gitlab'

provider.GitlabProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput">cacertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput">clientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput">earlyAuthCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile">cacertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert">clientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck">earlyAuthCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `cacertFileInput`<sup>Optional</sup> <a name="cacertFileInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput"></a>

```typescript
public readonly cacertFileInput: string;
```

- *Type:* string

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput"></a>

```typescript
public readonly clientCertInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `earlyAuthCheckInput`<sup>Optional</sup> <a name="earlyAuthCheckInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput"></a>

```typescript
public readonly earlyAuthCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* string

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `earlyAuthCheck`<sup>Optional</sup> <a name="earlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck"></a>

```typescript
public readonly earlyAuthCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GitlabProviderConfig <a name="GitlabProviderConfig" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-gitlab'

const gitlabProviderConfig: provider.GitlabProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl">baseUrl</a></code> | <code>string</code> | This is the target GitLab base API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile">cacertFile</a></code> | <code>string</code> | This is a file containing the ca cert to verify the gitlab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert">clientCert</a></code> | <code>string</code> | File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey">clientKey</a></code> | <code>string</code> | File path to client key when GitLab instance is behind company proxy. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck">earlyAuthCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true this disables SSL verification of the connection to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token">token</a></code> | <code>string</code> | The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#alias GitlabProvider#alias}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

This is the target GitLab base API endpoint.

Providing a value is a requirement when working with GitLab CE or GitLab Enterprise e.g. `https://my.gitlab.server/api/v4/`. It is optional to provide this value and it can also be sourced from the `GITLAB_BASE_URL` environment variable. The value must end with a slash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#base_url GitlabProvider#base_url}

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* string

This is a file containing the ca cert to verify the gitlab instance.

This is available for use when working with GitLab CE or Gitlab Enterprise with a locally-issued or self-signed certificate chain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#cacert_file GitlabProvider#cacert_file}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#client_cert GitlabProvider#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

File path to client key when GitLab instance is behind company proxy.

File must contain PEM encoded data. Required when `client_cert` is set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#client_key GitlabProvider#client_key}

---

##### `earlyAuthCheck`<sup>Optional</sup> <a name="earlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck"></a>

```typescript
public readonly earlyAuthCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable.

Set this to `false` to skip this check. This may be useful if the GitLab instance does not yet exist and is created within the same terraform module. It may be sourced from the `GITLAB_EARLY_AUTH_CHECK`. This is an experimental feature and may change in the future. Please make sure to always keep backups of your state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#early_auth_check GitlabProvider#early_auth_check}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true this disables SSL verification of the connection to the GitLab instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#insecure GitlabProvider#insecure}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab.

The OAuth method is used in this provider for authentication (using Bearer authorization token). See https://docs.gitlab.com/ee/api/#authentication for details. It may be sourced from the `GITLAB_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#token GitlabProvider#token}

---



