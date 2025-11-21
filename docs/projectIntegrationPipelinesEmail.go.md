# `projectIntegrationPipelinesEmail` Submodule <a name="`projectIntegrationPipelinesEmail` Submodule" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationPipelinesEmail <a name="ProjectIntegrationPipelinesEmail" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_pipelines_email gitlab_project_integration_pipelines_email}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationpipelinesemail"

projectintegrationpipelinesemail.NewProjectIntegrationPipelinesEmail(scope Construct, id *string, config ProjectIntegrationPipelinesEmailConfig) ProjectIntegrationPipelinesEmail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig">ProjectIntegrationPipelinesEmailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig">ProjectIntegrationPipelinesEmailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetBranchesToBeNotified"></a>

```go
func ResetBranchesToBeNotified()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetId"></a>

```go
func ResetId()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetNotifyOnlyBrokenPipelines"></a>

```go
func ResetNotifyOnlyBrokenPipelines()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationPipelinesEmail resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationpipelinesemail"

projectintegrationpipelinesemail.ProjectIntegrationPipelinesEmail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationpipelinesemail"

projectintegrationpipelinesemail.ProjectIntegrationPipelinesEmail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationpipelinesemail"

projectintegrationpipelinesemail.ProjectIntegrationPipelinesEmail_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationpipelinesemail"

projectintegrationpipelinesemail.ProjectIntegrationPipelinesEmail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectIntegrationPipelinesEmail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectIntegrationPipelinesEmail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectIntegrationPipelinesEmail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_pipelines_email#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationPipelinesEmail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.branchesToBeNotifiedInput"></a>

```go
func BranchesToBeNotifiedInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.notifyOnlyBrokenPipelinesInput"></a>

```go
func NotifyOnlyBrokenPipelinesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.branchesToBeNotified"></a>

```go
func BranchesToBeNotified() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.notifyOnlyBrokenPipelines"></a>

```go
func NotifyOnlyBrokenPipelines() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationPipelinesEmailConfig <a name="ProjectIntegrationPipelinesEmailConfig" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationpipelinesemail"

&projectintegrationpipelinesemail.ProjectIntegrationPipelinesEmailConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	Recipients: *[]*string,
	BranchesToBeNotified: *string,
	Id: *string,
	NotifyOnlyBrokenPipelines: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.project">Project</a></code> | <code>*string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.recipients">Recipients</a></code> | <code>*[]*string</code> | ) email addresses where notifications are sent. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_pipelines_email#id ProjectIntegrationPipelinesEmail#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>interface{}</code> | Notify only broken pipelines. Default is true. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_pipelines_email#project ProjectIntegrationPipelinesEmail#project}

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

) email addresses where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_pipelines_email#recipients ProjectIntegrationPipelinesEmail#recipients}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.branchesToBeNotified"></a>

```go
BranchesToBeNotified *string
```

- *Type:* *string

Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_pipelines_email#branches_to_be_notified ProjectIntegrationPipelinesEmail#branches_to_be_notified}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_pipelines_email#id ProjectIntegrationPipelinesEmail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.notifyOnlyBrokenPipelines"></a>

```go
NotifyOnlyBrokenPipelines interface{}
```

- *Type:* interface{}

Notify only broken pipelines. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_pipelines_email#notify_only_broken_pipelines ProjectIntegrationPipelinesEmail#notify_only_broken_pipelines}

---



