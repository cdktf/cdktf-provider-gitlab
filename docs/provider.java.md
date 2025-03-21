# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-gitlab.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitlabProvider <a name="GitlabProvider" id="@cdktf/provider-gitlab.provider.GitlabProvider"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs gitlab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.provider.GitlabProvider;

GitlabProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .baseUrl(java.lang.String)
//  .cacertFile(java.lang.String)
//  .clientCert(java.lang.String)
//  .clientKey(java.lang.String)
//  .earlyAuthCheck(java.lang.Boolean)
//  .earlyAuthCheck(IResolvable)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .retries(java.lang.Number)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | This is the target GitLab base API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.cacertFile">cacertFile</a></code> | <code>java.lang.String</code> | This is a file containing the ca cert to verify the gitlab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.clientCert">clientCert</a></code> | <code>java.lang.String</code> | File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.clientKey">clientKey</a></code> | <code>java.lang.String</code> | File path to client key when GitLab instance is behind company proxy. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.earlyAuthCheck">earlyAuthCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | (Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of headers to append to all API request to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true this disables SSL verification of the connection to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | The number of retries to execute when receiving a 429 Rate Limit error. Each retry will exponentially back off. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#alias GitlabProvider#alias}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.baseUrl"></a>

- *Type:* java.lang.String

This is the target GitLab base API endpoint.

Providing a value is a requirement when working with GitLab CE or GitLab Enterprise e.g. `https://my.gitlab.server/api/v4/`. It is optional to provide this value and it can also be sourced from the `GITLAB_BASE_URL` environment variable. The value must end with a slash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#base_url GitlabProvider#base_url}

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.cacertFile"></a>

- *Type:* java.lang.String

This is a file containing the ca cert to verify the gitlab instance.

This is available for use when working with GitLab CE or Gitlab Enterprise with a locally-issued or self-signed certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#cacert_file GitlabProvider#cacert_file}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.clientCert"></a>

- *Type:* java.lang.String

File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#client_cert GitlabProvider#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.clientKey"></a>

- *Type:* java.lang.String

File path to client key when GitLab instance is behind company proxy.

File must contain PEM encoded data. Required when `client_cert` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#client_key GitlabProvider#client_key}

---

##### `earlyAuthCheck`<sup>Optional</sup> <a name="earlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.earlyAuthCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

(Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable.

Set this to `false` to skip this check. This may be useful if the GitLab instance does not yet exist and is created within the same terraform module. It may be sourced from the `GITLAB_EARLY_AUTH_CHECK`. This is an experimental feature and may change in the future. Please make sure to always keep backups of your state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#early_auth_check GitlabProvider#early_auth_check}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.headers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of headers to append to all API request to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#headers GitlabProvider#headers}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true this disables SSL verification of the connection to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#insecure GitlabProvider#insecure}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

The number of retries to execute when receiving a 429 Rate Limit error. Each retry will exponentially back off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#retries GitlabProvider#retries}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab.

The OAuth method is used in this provider for authentication (using Bearer authorization token). See https://docs.gitlab.com/api/#authentication for details. It may be sourced from the `GITLAB_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#token GitlabProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile">resetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck">resetEarlyAuthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.provider.GitlabProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.provider.GitlabProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetCacertFile` <a name="resetCacertFile" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile"></a>

```java
public void resetCacertFile()
```

##### `resetClientCert` <a name="resetClientCert" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert"></a>

```java
public void resetClientCert()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey"></a>

```java
public void resetClientKey()
```

##### `resetEarlyAuthCheck` <a name="resetEarlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck"></a>

```java
public void resetEarlyAuthCheck()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GitlabProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.provider.GitlabProvider;

GitlabProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.provider.GitlabProvider;

GitlabProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.provider.GitlabProvider;

GitlabProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.provider.GitlabProvider;

GitlabProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GitlabProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GitlabProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GitlabProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GitlabProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GitlabProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput">cacertFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput">clientCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput">earlyAuthCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile">cacertFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert">clientCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck">earlyAuthCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `cacertFileInput`<sup>Optional</sup> <a name="cacertFileInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput"></a>

```java
public java.lang.String getCacertFileInput();
```

- *Type:* java.lang.String

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput"></a>

```java
public java.lang.String getClientCertInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `earlyAuthCheckInput`<sup>Optional</sup> <a name="earlyAuthCheckInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput"></a>

```java
public java.lang.Object getEarlyAuthCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput"></a>

```java
public java.lang.Object getInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile"></a>

```java
public java.lang.String getCacertFile();
```

- *Type:* java.lang.String

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert"></a>

```java
public java.lang.String getClientCert();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `earlyAuthCheck`<sup>Optional</sup> <a name="earlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck"></a>

```java
public java.lang.Object getEarlyAuthCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GitlabProviderConfig <a name="GitlabProviderConfig" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.provider.GitlabProviderConfig;

GitlabProviderConfig.builder()
//  .alias(java.lang.String)
//  .baseUrl(java.lang.String)
//  .cacertFile(java.lang.String)
//  .clientCert(java.lang.String)
//  .clientKey(java.lang.String)
//  .earlyAuthCheck(java.lang.Boolean)
//  .earlyAuthCheck(IResolvable)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .retries(java.lang.Number)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | This is the target GitLab base API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile">cacertFile</a></code> | <code>java.lang.String</code> | This is a file containing the ca cert to verify the gitlab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert">clientCert</a></code> | <code>java.lang.String</code> | File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | File path to client key when GitLab instance is behind company proxy. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck">earlyAuthCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | (Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of headers to append to all API request to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true this disables SSL verification of the connection to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | The number of retries to execute when receiving a 429 Rate Limit error. Each retry will exponentially back off. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#alias GitlabProvider#alias}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

This is the target GitLab base API endpoint.

Providing a value is a requirement when working with GitLab CE or GitLab Enterprise e.g. `https://my.gitlab.server/api/v4/`. It is optional to provide this value and it can also be sourced from the `GITLAB_BASE_URL` environment variable. The value must end with a slash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#base_url GitlabProvider#base_url}

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile"></a>

```java
public java.lang.String getCacertFile();
```

- *Type:* java.lang.String

This is a file containing the ca cert to verify the gitlab instance.

This is available for use when working with GitLab CE or Gitlab Enterprise with a locally-issued or self-signed certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#cacert_file GitlabProvider#cacert_file}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert"></a>

```java
public java.lang.String getClientCert();
```

- *Type:* java.lang.String

File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#client_cert GitlabProvider#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

File path to client key when GitLab instance is behind company proxy.

File must contain PEM encoded data. Required when `client_cert` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#client_key GitlabProvider#client_key}

---

##### `earlyAuthCheck`<sup>Optional</sup> <a name="earlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck"></a>

```java
public java.lang.Object getEarlyAuthCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

(Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable.

Set this to `false` to skip this check. This may be useful if the GitLab instance does not yet exist and is created within the same terraform module. It may be sourced from the `GITLAB_EARLY_AUTH_CHECK`. This is an experimental feature and may change in the future. Please make sure to always keep backups of your state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#early_auth_check GitlabProvider#early_auth_check}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of headers to append to all API request to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#headers GitlabProvider#headers}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true this disables SSL verification of the connection to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#insecure GitlabProvider#insecure}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

The number of retries to execute when receiving a 429 Rate Limit error. Each retry will exponentially back off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#retries GitlabProvider#retries}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab.

The OAuth method is used in this provider for authentication (using Bearer authorization token). See https://docs.gitlab.com/api/#authentication for details. It may be sourced from the `GITLAB_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs#token GitlabProvider#token}

---



