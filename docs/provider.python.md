# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-gitlab.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitlabProvider <a name="GitlabProvider" id="@cdktf/provider-gitlab.provider.GitlabProvider"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs gitlab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import provider

provider.GitlabProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  base_url: str = None,
  cacert_file: str = None,
  client_cert: str = None,
  client_key: str = None,
  early_auth_check: typing.Union[bool, IResolvable] = None,
  headers: typing.Mapping[str] = None,
  insecure: typing.Union[bool, IResolvable] = None,
  retries: typing.Union[int, float] = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.baseUrl">base_url</a></code> | <code>str</code> | This is the target GitLab base API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.cacertFile">cacert_file</a></code> | <code>str</code> | This is a file containing the ca cert to verify the gitlab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.clientCert">client_cert</a></code> | <code>str</code> | File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.clientKey">client_key</a></code> | <code>str</code> | File path to client key when GitLab instance is behind company proxy. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.earlyAuthCheck">early_auth_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.headers">headers</a></code> | <code>typing.Mapping[str]</code> | A map of headers to append to all API request to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true this disables SSL verification of the connection to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of retries to execute when receiving a 429 Rate Limit error. Each retry will exponentially back off. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#alias GitlabProvider#alias}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.baseUrl"></a>

- *Type:* str

This is the target GitLab base API endpoint.

Providing a value is a requirement when working with GitLab CE or GitLab Enterprise e.g. `https://my.gitlab.server/api/v4/`. It is optional to provide this value and it can also be sourced from the `GITLAB_BASE_URL` environment variable. The value must end with a slash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#base_url GitlabProvider#base_url}

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.cacertFile"></a>

- *Type:* str

This is a file containing the ca cert to verify the gitlab instance.

This is available for use when working with GitLab CE or Gitlab Enterprise with a locally-issued or self-signed certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#cacert_file GitlabProvider#cacert_file}

---

##### `client_cert`<sup>Optional</sup> <a name="client_cert" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.clientCert"></a>

- *Type:* str

File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#client_cert GitlabProvider#client_cert}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.clientKey"></a>

- *Type:* str

File path to client key when GitLab instance is behind company proxy.

File must contain PEM encoded data. Required when `client_cert` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#client_key GitlabProvider#client_key}

---

##### `early_auth_check`<sup>Optional</sup> <a name="early_auth_check" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.earlyAuthCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable.

Set this to `false` to skip this check. This may be useful if the GitLab instance does not yet exist and is created within the same terraform module. It may be sourced from the `GITLAB_EARLY_AUTH_CHECK`. This is an experimental feature and may change in the future. Please make sure to always keep backups of your state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#early_auth_check GitlabProvider#early_auth_check}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.headers"></a>

- *Type:* typing.Mapping[str]

A map of headers to append to all API request to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#headers GitlabProvider#headers}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true this disables SSL verification of the connection to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#insecure GitlabProvider#insecure}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The number of retries to execute when receiving a 429 Rate Limit error. Each retry will exponentially back off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#retries GitlabProvider#retries}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.token"></a>

- *Type:* str

The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab.

The OAuth method is used in this provider for authentication (using Bearer authorization token). See https://docs.gitlab.com/ee/api/#authentication for details. It may be sourced from the `GITLAB_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#token GitlabProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile">reset_cacert_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert">reset_client_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey">reset_client_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck">reset_early_auth_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.provider.GitlabProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.provider.GitlabProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_cacert_file` <a name="reset_cacert_file" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile"></a>

```python
def reset_cacert_file() -> None
```

##### `reset_client_cert` <a name="reset_client_cert" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert"></a>

```python
def reset_client_cert() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey"></a>

```python
def reset_client_key() -> None
```

##### `reset_early_auth_check` <a name="reset_early_auth_check" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck"></a>

```python
def reset_early_auth_check() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GitlabProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import provider

provider.GitlabProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import provider

provider.GitlabProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_gitlab import provider

provider.GitlabProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import provider

provider.GitlabProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GitlabProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GitlabProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GitlabProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GitlabProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput">cacert_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput">client_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput">early_auth_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.headersInput">headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile">cacert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert">client_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck">early_auth_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `cacert_file_input`<sup>Optional</sup> <a name="cacert_file_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput"></a>

```python
cacert_file_input: str
```

- *Type:* str

---

##### `client_cert_input`<sup>Optional</sup> <a name="client_cert_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput"></a>

```python
client_cert_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `early_auth_check_input`<sup>Optional</sup> <a name="early_auth_check_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput"></a>

```python
early_auth_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.headersInput"></a>

```python
headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile"></a>

```python
cacert_file: str
```

- *Type:* str

---

##### `client_cert`<sup>Optional</sup> <a name="client_cert" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert"></a>

```python
client_cert: str
```

- *Type:* str

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `early_auth_check`<sup>Optional</sup> <a name="early_auth_check" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck"></a>

```python
early_auth_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GitlabProviderConfig <a name="GitlabProviderConfig" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import provider

provider.GitlabProviderConfig(
  alias: str = None,
  base_url: str = None,
  cacert_file: str = None,
  client_cert: str = None,
  client_key: str = None,
  early_auth_check: typing.Union[bool, IResolvable] = None,
  headers: typing.Mapping[str] = None,
  insecure: typing.Union[bool, IResolvable] = None,
  retries: typing.Union[int, float] = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl">base_url</a></code> | <code>str</code> | This is the target GitLab base API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile">cacert_file</a></code> | <code>str</code> | This is a file containing the ca cert to verify the gitlab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert">client_cert</a></code> | <code>str</code> | File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey">client_key</a></code> | <code>str</code> | File path to client key when GitLab instance is behind company proxy. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck">early_auth_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | A map of headers to append to all API request to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true this disables SSL verification of the connection to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The number of retries to execute when receiving a 429 Rate Limit error. Each retry will exponentially back off. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token">token</a></code> | <code>str</code> | The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#alias GitlabProvider#alias}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

This is the target GitLab base API endpoint.

Providing a value is a requirement when working with GitLab CE or GitLab Enterprise e.g. `https://my.gitlab.server/api/v4/`. It is optional to provide this value and it can also be sourced from the `GITLAB_BASE_URL` environment variable. The value must end with a slash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#base_url GitlabProvider#base_url}

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile"></a>

```python
cacert_file: str
```

- *Type:* str

This is a file containing the ca cert to verify the gitlab instance.

This is available for use when working with GitLab CE or Gitlab Enterprise with a locally-issued or self-signed certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#cacert_file GitlabProvider#cacert_file}

---

##### `client_cert`<sup>Optional</sup> <a name="client_cert" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert"></a>

```python
client_cert: str
```

- *Type:* str

File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#client_cert GitlabProvider#client_cert}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

File path to client key when GitLab instance is behind company proxy.

File must contain PEM encoded data. Required when `client_cert` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#client_key GitlabProvider#client_key}

---

##### `early_auth_check`<sup>Optional</sup> <a name="early_auth_check" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck"></a>

```python
early_auth_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable.

Set this to `false` to skip this check. This may be useful if the GitLab instance does not yet exist and is created within the same terraform module. It may be sourced from the `GITLAB_EARLY_AUTH_CHECK`. This is an experimental feature and may change in the future. Please make sure to always keep backups of your state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#early_auth_check GitlabProvider#early_auth_check}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of headers to append to all API request to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#headers GitlabProvider#headers}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true this disables SSL verification of the connection to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#insecure GitlabProvider#insecure}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of retries to execute when receiving a 429 Rate Limit error. Each retry will exponentially back off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#retries GitlabProvider#retries}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab.

The OAuth method is used in this provider for authentication (using Bearer authorization token). See https://docs.gitlab.com/ee/api/#authentication for details. It may be sourced from the `GITLAB_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs#token GitlabProvider#token}

---



