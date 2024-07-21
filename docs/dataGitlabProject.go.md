# `dataGitlabProject` Submodule <a name="`dataGitlabProject` Submodule" id="@cdktf/provider-gitlab.dataGitlabProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProject <a name="DataGitlabProject" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/data-sources/project gitlab_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.NewDataGitlabProject(scope Construct, id *string, config DataGitlabProjectConfig) DataGitlabProject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig">DataGitlabProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig">DataGitlabProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetCiDefaultGitDepth">ResetCiDefaultGitDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPathWithNamespace">ResetPathWithNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPublicBuilds">ResetPublicBuilds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCiDefaultGitDepth` <a name="ResetCiDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetCiDefaultGitDepth"></a>

```go
func ResetCiDefaultGitDepth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetId"></a>

```go
func ResetId()
```

##### `ResetPathWithNamespace` <a name="ResetPathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPathWithNamespace"></a>

```go
func ResetPathWithNamespace()
```

##### `ResetPublicBuilds` <a name="ResetPublicBuilds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPublicBuilds"></a>

```go
func ResetPublicBuilds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.DataGitlabProject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.DataGitlabProject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.DataGitlabProject_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.DataGitlabProject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGitlabProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGitlabProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGitlabProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.analyticsAccessLevel">AnalyticsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.archived">Archived</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoCancelPendingPipelines">AutoCancelPendingPipelines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autocloseReferencedIssues">AutocloseReferencedIssues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsDeployStrategy">AutoDevopsDeployStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildGitStrategy">BuildGitStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildsAccessLevel">BuildsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildTimeout">BuildTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciConfigPath">CiConfigPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciRestrictPipelineCancellationRole">CiRestrictPipelineCancellationRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciSeparatedCaches">CiSeparatedCaches</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerExpirationPolicy">ContainerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList">DataGitlabProjectContainerExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerRegistryAccessLevel">ContainerRegistryAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emailsEnabled">EmailsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emptyRepo">EmptyRepo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.environmentsAccessLevel">EnvironmentsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.externalAuthorizationClassificationLabel">ExternalAuthorizationClassificationLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.featureFlagsAccessLevel">FeatureFlagsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forkingAccessLevel">ForkingAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.httpUrlToRepo">HttpUrlToRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.importUrl">ImportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.infrastructureAccessLevel">InfrastructureAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesAccessLevel">IssuesAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesEnabled">IssuesEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lfsEnabled">LfsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeCommitTemplate">MergeCommitTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergePipelinesEnabled">MergePipelinesEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsAccessLevel">MergeRequestsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsEnabled">MergeRequestsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeTrainsEnabled">MergeTrainsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.monitorAccessLevel">MonitorAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.namespaceId">NamespaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pipelinesEnabled">PipelinesEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.printingMergeRequestLinkEnabled">PrintingMergeRequestLinkEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList">DataGitlabProjectPushRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.releasesAccessLevel">ReleasesAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.removeSourceBranchAfterMerge">RemoveSourceBranchAfterMerge</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryAccessLevel">RepositoryAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryStorage">RepositoryStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requirementsAccessLevel">RequirementsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.resolveOutdatedDiffDiscussions">ResolveOutdatedDiffDiscussions</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.restrictUserDefinedVariables">RestrictUserDefinedVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.runnersToken">RunnersToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.securityAndComplianceAccessLevel">SecurityAndComplianceAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sharedWithGroups">SharedWithGroups</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList">DataGitlabProjectSharedWithGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsAccessLevel">SnippetsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsEnabled">SnippetsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.squashCommitTemplate">SquashCommitTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sshUrlToRepo">SshUrlToRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.suggestionCommitMessage">SuggestionCommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.topics">Topics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.visibilityLevel">VisibilityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiEnabled">WikiEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepthInput">CiDefaultGitDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespaceInput">PathWithNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuildsInput">PublicBuildsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepth">CiDefaultGitDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespace">PathWithNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuilds">PublicBuilds</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AnalyticsAccessLevel`<sup>Required</sup> <a name="AnalyticsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.analyticsAccessLevel"></a>

```go
func AnalyticsAccessLevel() *string
```

- *Type:* *string

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.archived"></a>

```go
func Archived() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoCancelPendingPipelines`<sup>Required</sup> <a name="AutoCancelPendingPipelines" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoCancelPendingPipelines"></a>

```go
func AutoCancelPendingPipelines() *string
```

- *Type:* *string

---

##### `AutocloseReferencedIssues`<sup>Required</sup> <a name="AutocloseReferencedIssues" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autocloseReferencedIssues"></a>

```go
func AutocloseReferencedIssues() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoDevopsDeployStrategy`<sup>Required</sup> <a name="AutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsDeployStrategy"></a>

```go
func AutoDevopsDeployStrategy() *string
```

- *Type:* *string

---

##### `AutoDevopsEnabled`<sup>Required</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsEnabled"></a>

```go
func AutoDevopsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BuildGitStrategy`<sup>Required</sup> <a name="BuildGitStrategy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildGitStrategy"></a>

```go
func BuildGitStrategy() *string
```

- *Type:* *string

---

##### `BuildsAccessLevel`<sup>Required</sup> <a name="BuildsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildsAccessLevel"></a>

```go
func BuildsAccessLevel() *string
```

- *Type:* *string

---

##### `BuildTimeout`<sup>Required</sup> <a name="BuildTimeout" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildTimeout"></a>

```go
func BuildTimeout() *f64
```

- *Type:* *f64

---

##### `CiConfigPath`<sup>Required</sup> <a name="CiConfigPath" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciConfigPath"></a>

```go
func CiConfigPath() *string
```

- *Type:* *string

---

##### `CiRestrictPipelineCancellationRole`<sup>Required</sup> <a name="CiRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciRestrictPipelineCancellationRole"></a>

```go
func CiRestrictPipelineCancellationRole() *string
```

- *Type:* *string

---

##### `CiSeparatedCaches`<sup>Required</sup> <a name="CiSeparatedCaches" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciSeparatedCaches"></a>

```go
func CiSeparatedCaches() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ContainerExpirationPolicy`<sup>Required</sup> <a name="ContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerExpirationPolicy"></a>

```go
func ContainerExpirationPolicy() DataGitlabProjectContainerExpirationPolicyList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList">DataGitlabProjectContainerExpirationPolicyList</a>

---

##### `ContainerRegistryAccessLevel`<sup>Required</sup> <a name="ContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerRegistryAccessLevel"></a>

```go
func ContainerRegistryAccessLevel() *string
```

- *Type:* *string

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EmailsEnabled`<sup>Required</sup> <a name="EmailsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emailsEnabled"></a>

```go
func EmailsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EmptyRepo`<sup>Required</sup> <a name="EmptyRepo" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emptyRepo"></a>

```go
func EmptyRepo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnvironmentsAccessLevel`<sup>Required</sup> <a name="EnvironmentsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.environmentsAccessLevel"></a>

```go
func EnvironmentsAccessLevel() *string
```

- *Type:* *string

---

##### `ExternalAuthorizationClassificationLabel`<sup>Required</sup> <a name="ExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.externalAuthorizationClassificationLabel"></a>

```go
func ExternalAuthorizationClassificationLabel() *string
```

- *Type:* *string

---

##### `FeatureFlagsAccessLevel`<sup>Required</sup> <a name="FeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.featureFlagsAccessLevel"></a>

```go
func FeatureFlagsAccessLevel() *string
```

- *Type:* *string

---

##### `ForkingAccessLevel`<sup>Required</sup> <a name="ForkingAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forkingAccessLevel"></a>

```go
func ForkingAccessLevel() *string
```

- *Type:* *string

---

##### `HttpUrlToRepo`<sup>Required</sup> <a name="HttpUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.httpUrlToRepo"></a>

```go
func HttpUrlToRepo() *string
```

- *Type:* *string

---

##### `ImportUrl`<sup>Required</sup> <a name="ImportUrl" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.importUrl"></a>

```go
func ImportUrl() *string
```

- *Type:* *string

---

##### `InfrastructureAccessLevel`<sup>Required</sup> <a name="InfrastructureAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.infrastructureAccessLevel"></a>

```go
func InfrastructureAccessLevel() *string
```

- *Type:* *string

---

##### `IssuesAccessLevel`<sup>Required</sup> <a name="IssuesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesAccessLevel"></a>

```go
func IssuesAccessLevel() *string
```

- *Type:* *string

---

##### `IssuesEnabled`<sup>Required</sup> <a name="IssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesEnabled"></a>

```go
func IssuesEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeepLatestArtifact`<sup>Required</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.keepLatestArtifact"></a>

```go
func KeepLatestArtifact() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LfsEnabled`<sup>Required</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lfsEnabled"></a>

```go
func LfsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MergeCommitTemplate`<sup>Required</sup> <a name="MergeCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeCommitTemplate"></a>

```go
func MergeCommitTemplate() *string
```

- *Type:* *string

---

##### `MergePipelinesEnabled`<sup>Required</sup> <a name="MergePipelinesEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergePipelinesEnabled"></a>

```go
func MergePipelinesEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MergeRequestsAccessLevel`<sup>Required</sup> <a name="MergeRequestsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsAccessLevel"></a>

```go
func MergeRequestsAccessLevel() *string
```

- *Type:* *string

---

##### `MergeRequestsEnabled`<sup>Required</sup> <a name="MergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsEnabled"></a>

```go
func MergeRequestsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MergeTrainsEnabled`<sup>Required</sup> <a name="MergeTrainsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeTrainsEnabled"></a>

```go
func MergeTrainsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MonitorAccessLevel`<sup>Required</sup> <a name="MonitorAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.monitorAccessLevel"></a>

```go
func MonitorAccessLevel() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.namespaceId"></a>

```go
func NamespaceId() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PipelinesEnabled`<sup>Required</sup> <a name="PipelinesEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pipelinesEnabled"></a>

```go
func PipelinesEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrintingMergeRequestLinkEnabled`<sup>Required</sup> <a name="PrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.printingMergeRequestLinkEnabled"></a>

```go
func PrintingMergeRequestLinkEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PushRules`<sup>Required</sup> <a name="PushRules" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pushRules"></a>

```go
func PushRules() DataGitlabProjectPushRulesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList">DataGitlabProjectPushRulesList</a>

---

##### `ReleasesAccessLevel`<sup>Required</sup> <a name="ReleasesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.releasesAccessLevel"></a>

```go
func ReleasesAccessLevel() *string
```

- *Type:* *string

---

##### `RemoveSourceBranchAfterMerge`<sup>Required</sup> <a name="RemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.removeSourceBranchAfterMerge"></a>

```go
func RemoveSourceBranchAfterMerge() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RepositoryAccessLevel`<sup>Required</sup> <a name="RepositoryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryAccessLevel"></a>

```go
func RepositoryAccessLevel() *string
```

- *Type:* *string

---

##### `RepositoryStorage`<sup>Required</sup> <a name="RepositoryStorage" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryStorage"></a>

```go
func RepositoryStorage() *string
```

- *Type:* *string

---

##### `RequestAccessEnabled`<sup>Required</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requestAccessEnabled"></a>

```go
func RequestAccessEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RequirementsAccessLevel`<sup>Required</sup> <a name="RequirementsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requirementsAccessLevel"></a>

```go
func RequirementsAccessLevel() *string
```

- *Type:* *string

---

##### `ResolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="ResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.resolveOutdatedDiffDiscussions"></a>

```go
func ResolveOutdatedDiffDiscussions() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RestrictUserDefinedVariables`<sup>Required</sup> <a name="RestrictUserDefinedVariables" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.restrictUserDefinedVariables"></a>

```go
func RestrictUserDefinedVariables() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RunnersToken`<sup>Required</sup> <a name="RunnersToken" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.runnersToken"></a>

```go
func RunnersToken() *string
```

- *Type:* *string

---

##### `SecurityAndComplianceAccessLevel`<sup>Required</sup> <a name="SecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.securityAndComplianceAccessLevel"></a>

```go
func SecurityAndComplianceAccessLevel() *string
```

- *Type:* *string

---

##### `SharedWithGroups`<sup>Required</sup> <a name="SharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sharedWithGroups"></a>

```go
func SharedWithGroups() DataGitlabProjectSharedWithGroupsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList">DataGitlabProjectSharedWithGroupsList</a>

---

##### `SnippetsAccessLevel`<sup>Required</sup> <a name="SnippetsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsAccessLevel"></a>

```go
func SnippetsAccessLevel() *string
```

- *Type:* *string

---

##### `SnippetsEnabled`<sup>Required</sup> <a name="SnippetsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsEnabled"></a>

```go
func SnippetsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SquashCommitTemplate`<sup>Required</sup> <a name="SquashCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.squashCommitTemplate"></a>

```go
func SquashCommitTemplate() *string
```

- *Type:* *string

---

##### `SshUrlToRepo`<sup>Required</sup> <a name="SshUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sshUrlToRepo"></a>

```go
func SshUrlToRepo() *string
```

- *Type:* *string

---

##### `SuggestionCommitMessage`<sup>Required</sup> <a name="SuggestionCommitMessage" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.suggestionCommitMessage"></a>

```go
func SuggestionCommitMessage() *string
```

- *Type:* *string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.topics"></a>

```go
func Topics() *[]*string
```

- *Type:* *[]*string

---

##### `VisibilityLevel`<sup>Required</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.visibilityLevel"></a>

```go
func VisibilityLevel() *string
```

- *Type:* *string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `WikiAccessLevel`<sup>Required</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiAccessLevel"></a>

```go
func WikiAccessLevel() *string
```

- *Type:* *string

---

##### `WikiEnabled`<sup>Required</sup> <a name="WikiEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiEnabled"></a>

```go
func WikiEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CiDefaultGitDepthInput`<sup>Optional</sup> <a name="CiDefaultGitDepthInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepthInput"></a>

```go
func CiDefaultGitDepthInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PathWithNamespaceInput`<sup>Optional</sup> <a name="PathWithNamespaceInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespaceInput"></a>

```go
func PathWithNamespaceInput() *string
```

- *Type:* *string

---

##### `PublicBuildsInput`<sup>Optional</sup> <a name="PublicBuildsInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuildsInput"></a>

```go
func PublicBuildsInput() interface{}
```

- *Type:* interface{}

---

##### `CiDefaultGitDepth`<sup>Required</sup> <a name="CiDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepth"></a>

```go
func CiDefaultGitDepth() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PathWithNamespace`<sup>Required</sup> <a name="PathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespace"></a>

```go
func PathWithNamespace() *string
```

- *Type:* *string

---

##### `PublicBuilds`<sup>Required</sup> <a name="PublicBuilds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuilds"></a>

```go
func PublicBuilds() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectConfig <a name="DataGitlabProjectConfig" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

&datagitlabproject.DataGitlabProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CiDefaultGitDepth: *f64,
	Id: *string,
	PathWithNamespace: *string,
	PublicBuilds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.ciDefaultGitDepth">CiDefaultGitDepth</a></code> | <code>*f64</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.id">Id</a></code> | <code>*string</code> | The integer that uniquely identifies the project within the gitlab install. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.pathWithNamespace">PathWithNamespace</a></code> | <code>*string</code> | The path of the repository with namespace. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.publicBuilds">PublicBuilds</a></code> | <code>interface{}</code> | If true, jobs can be viewed by non-project members. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CiDefaultGitDepth`<sup>Optional</sup> <a name="CiDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.ciDefaultGitDepth"></a>

```go
CiDefaultGitDepth *f64
```

- *Type:* *f64

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/data-sources/project#ci_default_git_depth DataGitlabProject#ci_default_git_depth}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The integer that uniquely identifies the project within the gitlab install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/data-sources/project#id DataGitlabProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PathWithNamespace`<sup>Optional</sup> <a name="PathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.pathWithNamespace"></a>

```go
PathWithNamespace *string
```

- *Type:* *string

The path of the repository with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/data-sources/project#path_with_namespace DataGitlabProject#path_with_namespace}

---

##### `PublicBuilds`<sup>Optional</sup> <a name="PublicBuilds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.publicBuilds"></a>

```go
PublicBuilds interface{}
```

- *Type:* interface{}

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/data-sources/project#public_builds DataGitlabProject#public_builds}

---

### DataGitlabProjectContainerExpirationPolicy <a name="DataGitlabProjectContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

&datagitlabproject.DataGitlabProjectContainerExpirationPolicy {

}
```


### DataGitlabProjectPushRules <a name="DataGitlabProjectPushRules" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

&datagitlabproject.DataGitlabProjectPushRules {

}
```


### DataGitlabProjectSharedWithGroups <a name="DataGitlabProjectSharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

&datagitlabproject.DataGitlabProjectSharedWithGroups {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectContainerExpirationPolicyList <a name="DataGitlabProjectContainerExpirationPolicyList" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.NewDataGitlabProjectContainerExpirationPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectContainerExpirationPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.get"></a>

```go
func Get(index *f64) DataGitlabProjectContainerExpirationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectContainerExpirationPolicyOutputReference <a name="DataGitlabProjectContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.NewDataGitlabProjectContainerExpirationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectContainerExpirationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.cadence">Cadence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.keepN">KeepN</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegex">NameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete">NameRegexDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep">NameRegexKeep</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nextRunAt">NextRunAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.olderThan">OlderThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy">DataGitlabProjectContainerExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cadence`<sup>Required</sup> <a name="Cadence" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.cadence"></a>

```go
func Cadence() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeepN`<sup>Required</sup> <a name="KeepN" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.keepN"></a>

```go
func KeepN() *f64
```

- *Type:* *f64

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegex"></a>

```go
func NameRegex() *string
```

- *Type:* *string

---

##### `NameRegexDelete`<sup>Required</sup> <a name="NameRegexDelete" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```go
func NameRegexDelete() *string
```

- *Type:* *string

---

##### `NameRegexKeep`<sup>Required</sup> <a name="NameRegexKeep" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```go
func NameRegexKeep() *string
```

- *Type:* *string

---

##### `NextRunAt`<sup>Required</sup> <a name="NextRunAt" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```go
func NextRunAt() *string
```

- *Type:* *string

---

##### `OlderThan`<sup>Required</sup> <a name="OlderThan" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.olderThan"></a>

```go
func OlderThan() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectContainerExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy">DataGitlabProjectContainerExpirationPolicy</a>

---


### DataGitlabProjectPushRulesList <a name="DataGitlabProjectPushRulesList" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.NewDataGitlabProjectPushRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectPushRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.get"></a>

```go
func Get(index *f64) DataGitlabProjectPushRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectPushRulesOutputReference <a name="DataGitlabProjectPushRulesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.NewDataGitlabProjectPushRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectPushRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.branchNameRegex">BranchNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fileNameRegex">FileNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.memberCheck">MemberCheck</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.preventSecrets">PreventSecrets</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules">DataGitlabProjectPushRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorEmailRegex`<sup>Required</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.authorEmailRegex"></a>

```go
func AuthorEmailRegex() *string
```

- *Type:* *string

---

##### `BranchNameRegex`<sup>Required</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.branchNameRegex"></a>

```go
func BranchNameRegex() *string
```

- *Type:* *string

---

##### `CommitCommitterCheck`<sup>Required</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterCheck"></a>

```go
func CommitCommitterCheck() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CommitCommitterNameCheck`<sup>Required</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```go
func CommitCommitterNameCheck() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CommitMessageNegativeRegex`<sup>Required</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```go
func CommitMessageNegativeRegex() *string
```

- *Type:* *string

---

##### `CommitMessageRegex`<sup>Required</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageRegex"></a>

```go
func CommitMessageRegex() *string
```

- *Type:* *string

---

##### `DenyDeleteTag`<sup>Required</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.denyDeleteTag"></a>

```go
func DenyDeleteTag() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FileNameRegex`<sup>Required</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fileNameRegex"></a>

```go
func FileNameRegex() *string
```

- *Type:* *string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `MemberCheck`<sup>Required</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.memberCheck"></a>

```go
func MemberCheck() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PreventSecrets`<sup>Required</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.preventSecrets"></a>

```go
func PreventSecrets() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RejectUnsignedCommits`<sup>Required</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```go
func RejectUnsignedCommits() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules">DataGitlabProjectPushRules</a>

---


### DataGitlabProjectSharedWithGroupsList <a name="DataGitlabProjectSharedWithGroupsList" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.NewDataGitlabProjectSharedWithGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectSharedWithGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.get"></a>

```go
func Get(index *f64) DataGitlabProjectSharedWithGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectSharedWithGroupsOutputReference <a name="DataGitlabProjectSharedWithGroupsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabproject"

datagitlabproject.NewDataGitlabProjectSharedWithGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectSharedWithGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupAccessLevel">GroupAccessLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupFullPath">GroupFullPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups">DataGitlabProjectSharedWithGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupAccessLevel`<sup>Required</sup> <a name="GroupAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupAccessLevel"></a>

```go
func GroupAccessLevel() *f64
```

- *Type:* *f64

---

##### `GroupFullPath`<sup>Required</sup> <a name="GroupFullPath" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupFullPath"></a>

```go
func GroupFullPath() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectSharedWithGroups
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups">DataGitlabProjectSharedWithGroups</a>

---



