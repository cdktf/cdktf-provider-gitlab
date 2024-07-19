# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-gitlab.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitlabProvider <a name="GitlabProvider" id="@cdktf/provider-gitlab.provider.GitlabProvider"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs gitlab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GitlabProvider(Construct Scope, string Id, GitlabProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig">GitlabProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig">GitlabProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile">ResetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert">ResetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck">ResetEarlyAuthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.provider.GitlabProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.provider.GitlabProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetCacertFile` <a name="ResetCacertFile" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile"></a>

```csharp
private void ResetCacertFile()
```

##### `ResetClientCert` <a name="ResetClientCert" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert"></a>

```csharp
private void ResetClientCert()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey"></a>

```csharp
private void ResetClientKey()
```

##### `ResetEarlyAuthCheck` <a name="ResetEarlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck"></a>

```csharp
private void ResetEarlyAuthCheck()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GitlabProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GitlabProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GitlabProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GitlabProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GitlabProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GitlabProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GitlabProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GitlabProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GitlabProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput">CacertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput">ClientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput">ClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput">EarlyAuthCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput">InsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile">CacertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert">ClientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey">ClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck">EarlyAuthCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure">Insecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `CacertFileInput`<sup>Optional</sup> <a name="CacertFileInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput"></a>

```csharp
public string CacertFileInput { get; }
```

- *Type:* string

---

##### `ClientCertInput`<sup>Optional</sup> <a name="ClientCertInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput"></a>

```csharp
public string ClientCertInput { get; }
```

- *Type:* string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput"></a>

```csharp
public string ClientKeyInput { get; }
```

- *Type:* string

---

##### `EarlyAuthCheckInput`<sup>Optional</sup> <a name="EarlyAuthCheckInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput"></a>

```csharp
public object EarlyAuthCheckInput { get; }
```

- *Type:* object

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput"></a>

```csharp
public object InsecureInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile"></a>

```csharp
public string CacertFile { get; }
```

- *Type:* string

---

##### `ClientCert`<sup>Optional</sup> <a name="ClientCert" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert"></a>

```csharp
public string ClientCert { get; }
```

- *Type:* string

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey"></a>

```csharp
public string ClientKey { get; }
```

- *Type:* string

---

##### `EarlyAuthCheck`<sup>Optional</sup> <a name="EarlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck"></a>

```csharp
public object EarlyAuthCheck { get; }
```

- *Type:* object

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure"></a>

```csharp
public object Insecure { get; }
```

- *Type:* object

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GitlabProviderConfig <a name="GitlabProviderConfig" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GitlabProviderConfig {
    string Alias = null,
    string BaseUrl = null,
    string CacertFile = null,
    string ClientCert = null,
    string ClientKey = null,
    object EarlyAuthCheck = null,
    object Insecure = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | This is the target GitLab base API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile">CacertFile</a></code> | <code>string</code> | This is a file containing the ca cert to verify the gitlab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert">ClientCert</a></code> | <code>string</code> | File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey">ClientKey</a></code> | <code>string</code> | File path to client key when GitLab instance is behind company proxy. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck">EarlyAuthCheck</a></code> | <code>object</code> | (Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure">Insecure</a></code> | <code>object</code> | When set to true this disables SSL verification of the connection to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token">Token</a></code> | <code>string</code> | The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs#alias GitlabProvider#alias}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

This is the target GitLab base API endpoint.

Providing a value is a requirement when working with GitLab CE or GitLab Enterprise e.g. `https://my.gitlab.server/api/v4/`. It is optional to provide this value and it can also be sourced from the `GITLAB_BASE_URL` environment variable. The value must end with a slash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs#base_url GitlabProvider#base_url}

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile"></a>

```csharp
public string CacertFile { get; set; }
```

- *Type:* string

This is a file containing the ca cert to verify the gitlab instance.

This is available for use when working with GitLab CE or Gitlab Enterprise with a locally-issued or self-signed certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs#cacert_file GitlabProvider#cacert_file}

---

##### `ClientCert`<sup>Optional</sup> <a name="ClientCert" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert"></a>

```csharp
public string ClientCert { get; set; }
```

- *Type:* string

File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs#client_cert GitlabProvider#client_cert}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey"></a>

```csharp
public string ClientKey { get; set; }
```

- *Type:* string

File path to client key when GitLab instance is behind company proxy.

File must contain PEM encoded data. Required when `client_cert` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs#client_key GitlabProvider#client_key}

---

##### `EarlyAuthCheck`<sup>Optional</sup> <a name="EarlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck"></a>

```csharp
public object EarlyAuthCheck { get; set; }
```

- *Type:* object

(Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable.

Set this to `false` to skip this check. This may be useful if the GitLab instance does not yet exist and is created within the same terraform module. It may be sourced from the `GITLAB_EARLY_AUTH_CHECK`. This is an experimental feature and may change in the future. Please make sure to always keep backups of your state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs#early_auth_check GitlabProvider#early_auth_check}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

When set to true this disables SSL verification of the connection to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs#insecure GitlabProvider#insecure}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab.

The OAuth method is used in this provider for authentication (using Bearer authorization token). See https://docs.gitlab.com/ee/api/#authentication for details. It may be sourced from the `GITLAB_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs#token GitlabProvider#token}

---



