# `dataGitlabPipelineSchedules` Submodule <a name="`dataGitlabPipelineSchedules` Submodule" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabPipelineSchedules <a name="DataGitlabPipelineSchedules" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/data-sources/pipeline_schedules gitlab_pipeline_schedules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

datagitlabpipelineschedules.NewDataGitlabPipelineSchedules(scope Construct, id *string, config DataGitlabPipelineSchedulesConfig) DataGitlabPipelineSchedules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig">DataGitlabPipelineSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig">DataGitlabPipelineSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabPipelineSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

datagitlabpipelineschedules.DataGitlabPipelineSchedules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

datagitlabpipelineschedules.DataGitlabPipelineSchedules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

datagitlabpipelineschedules.DataGitlabPipelineSchedules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

datagitlabpipelineschedules.DataGitlabPipelineSchedules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGitlabPipelineSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGitlabPipelineSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGitlabPipelineSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/data-sources/pipeline_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabPipelineSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.pipelineSchedules">PipelineSchedules</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList">DataGitlabPipelineSchedulesPipelineSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PipelineSchedules`<sup>Required</sup> <a name="PipelineSchedules" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.pipelineSchedules"></a>

```go
func PipelineSchedules() DataGitlabPipelineSchedulesPipelineSchedulesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList">DataGitlabPipelineSchedulesPipelineSchedulesList</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabPipelineSchedulesConfig <a name="DataGitlabPipelineSchedulesConfig" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

&datagitlabpipelineschedules.DataGitlabPipelineSchedulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.project">Project</a></code> | <code>*string</code> | The name or id of the project to add the schedule to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/data-sources/pipeline_schedules#project DataGitlabPipelineSchedules#project}

---

### DataGitlabPipelineSchedulesPipelineSchedules <a name="DataGitlabPipelineSchedulesPipelineSchedules" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

&datagitlabpipelineschedules.DataGitlabPipelineSchedulesPipelineSchedules {
	Id: *string,
	CronTimezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.id">Id</a></code> | <code>*string</code> | The pipeline schedule id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.cronTimezone">CronTimezone</a></code> | <code>*string</code> | The timezone. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.id"></a>

```go
Id *string
```

- *Type:* *string

The pipeline schedule id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/data-sources/pipeline_schedules#id DataGitlabPipelineSchedules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `CronTimezone`<sup>Optional</sup> <a name="CronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.cronTimezone"></a>

```go
CronTimezone *string
```

- *Type:* *string

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/data-sources/pipeline_schedules#cron_timezone DataGitlabPipelineSchedules#cron_timezone}

---

### DataGitlabPipelineSchedulesPipelineSchedulesOwner <a name="DataGitlabPipelineSchedulesPipelineSchedulesOwner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

&datagitlabpipelineschedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabPipelineSchedulesPipelineSchedulesList <a name="DataGitlabPipelineSchedulesPipelineSchedulesList" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

datagitlabpipelineschedules.NewDataGitlabPipelineSchedulesPipelineSchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabPipelineSchedulesPipelineSchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.get"></a>

```go
func Get(index *f64) DataGitlabPipelineSchedulesPipelineSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGitlabPipelineSchedulesPipelineSchedulesOutputReference <a name="DataGitlabPipelineSchedulesPipelineSchedulesOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

datagitlabpipelineschedules.NewDataGitlabPipelineSchedulesPipelineSchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabPipelineSchedulesPipelineSchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resetCronTimezone">ResetCronTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronTimezone` <a name="ResetCronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resetCronTimezone"></a>

```go
func ResetCronTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cron">Cron</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.nextRunAt">NextRunAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.owner">Owner</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference">DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezoneInput">CronTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezone">CronTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules">DataGitlabPipelineSchedulesPipelineSchedules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cron"></a>

```go
func Cron() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `NextRunAt`<sup>Required</sup> <a name="NextRunAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.nextRunAt"></a>

```go
func NextRunAt() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.owner"></a>

```go
func Owner() DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference">DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference</a>

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `CronTimezoneInput`<sup>Optional</sup> <a name="CronTimezoneInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezoneInput"></a>

```go
func CronTimezoneInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CronTimezone`<sup>Required</sup> <a name="CronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezone"></a>

```go
func CronTimezone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabPipelineSchedulesPipelineSchedules
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules">DataGitlabPipelineSchedulesPipelineSchedules</a>

---


### DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference <a name="DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabpipelineschedules"

datagitlabpipelineschedules.NewDataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner">DataGitlabPipelineSchedulesPipelineSchedulesOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.avatarUrl"></a>

```go
func AvatarUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabPipelineSchedulesPipelineSchedulesOwner
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner">DataGitlabPipelineSchedulesPipelineSchedulesOwner</a>

---



