# `data_gitlab_project_protected_branch`

Refer to the Terraform Registory for docs: [`data_gitlab_project_protected_branch`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/data-sources/project_protected_branch).

# `dataGitlabProjectProtectedBranch` Submodule <a name="`dataGitlabProjectProtectedBranch` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectProtectedBranch <a name="DataGitlabProjectProtectedBranch" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/data-sources/project_protected_branch gitlab_project_protected_branch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

datagitlabprojectprotectedbranch.NewDataGitlabProjectProtectedBranch(scope Construct, id *string, config DataGitlabProjectProtectedBranchConfig) DataGitlabProjectProtectedBranch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig">DataGitlabProjectProtectedBranchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig">DataGitlabProjectProtectedBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectProtectedBranch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

datagitlabprojectprotectedbranch.DataGitlabProjectProtectedBranch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

datagitlabprojectprotectedbranch.DataGitlabProjectProtectedBranch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

datagitlabprojectprotectedbranch.DataGitlabProjectProtectedBranch_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

datagitlabprojectprotectedbranch.DataGitlabProjectProtectedBranch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGitlabProjectProtectedBranch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGitlabProjectProtectedBranch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGitlabProjectProtectedBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/data-sources/project_protected_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectProtectedBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.allowForcePush">AllowForcePush</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.codeOwnerApprovalRequired">CodeOwnerApprovalRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.mergeAccessLevels">MergeAccessLevels</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList">DataGitlabProjectProtectedBranchMergeAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.pushAccessLevels">PushAccessLevels</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList">DataGitlabProjectProtectedBranchPushAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowForcePush`<sup>Required</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.allowForcePush"></a>

```go
func AllowForcePush() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CodeOwnerApprovalRequired`<sup>Required</sup> <a name="CodeOwnerApprovalRequired" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.codeOwnerApprovalRequired"></a>

```go
func CodeOwnerApprovalRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `MergeAccessLevels`<sup>Required</sup> <a name="MergeAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.mergeAccessLevels"></a>

```go
func MergeAccessLevels() DataGitlabProjectProtectedBranchMergeAccessLevelsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList">DataGitlabProjectProtectedBranchMergeAccessLevelsList</a>

---

##### `PushAccessLevels`<sup>Required</sup> <a name="PushAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.pushAccessLevels"></a>

```go
func PushAccessLevels() DataGitlabProjectProtectedBranchPushAccessLevelsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList">DataGitlabProjectProtectedBranchPushAccessLevelsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectProtectedBranchConfig <a name="DataGitlabProjectProtectedBranchConfig" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

&datagitlabprojectprotectedbranch.DataGitlabProjectProtectedBranchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.name">Name</a></code> | <code>*string</code> | The name of the protected branch. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The integer or path with namespace that uniquely identifies the project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the protected branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/data-sources/project_protected_branch#name DataGitlabProjectProtectedBranch#name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The integer or path with namespace that uniquely identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/data-sources/project_protected_branch#project_id DataGitlabProjectProtectedBranch#project_id}

---

### DataGitlabProjectProtectedBranchMergeAccessLevels <a name="DataGitlabProjectProtectedBranchMergeAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

&datagitlabprojectprotectedbranch.DataGitlabProjectProtectedBranchMergeAccessLevels {

}
```


### DataGitlabProjectProtectedBranchPushAccessLevels <a name="DataGitlabProjectProtectedBranchPushAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

&datagitlabprojectprotectedbranch.DataGitlabProjectProtectedBranchPushAccessLevels {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectProtectedBranchMergeAccessLevelsList <a name="DataGitlabProjectProtectedBranchMergeAccessLevelsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

datagitlabprojectprotectedbranch.NewDataGitlabProjectProtectedBranchMergeAccessLevelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectProtectedBranchMergeAccessLevelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.get"></a>

```go
func Get(index *f64) DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference <a name="DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

datagitlabprojectprotectedbranch.NewDataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevels">DataGitlabProjectProtectedBranchMergeAccessLevels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.accessLevelDescription"></a>

```go
func AccessLevelDescription() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectProtectedBranchMergeAccessLevels
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchMergeAccessLevels">DataGitlabProjectProtectedBranchMergeAccessLevels</a>

---


### DataGitlabProjectProtectedBranchPushAccessLevelsList <a name="DataGitlabProjectProtectedBranchPushAccessLevelsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

datagitlabprojectprotectedbranch.NewDataGitlabProjectProtectedBranchPushAccessLevelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectProtectedBranchPushAccessLevelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.get"></a>

```go
func Get(index *f64) DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference <a name="DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v11/datagitlabprojectprotectedbranch"

datagitlabprojectprotectedbranch.NewDataGitlabProjectProtectedBranchPushAccessLevelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevels">DataGitlabProjectProtectedBranchPushAccessLevels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.accessLevelDescription"></a>

```go
func AccessLevelDescription() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectProtectedBranchPushAccessLevels
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranch.DataGitlabProjectProtectedBranchPushAccessLevels">DataGitlabProjectProtectedBranchPushAccessLevels</a>

---



