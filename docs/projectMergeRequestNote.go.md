# `projectMergeRequestNote` Submodule <a name="`projectMergeRequestNote` Submodule" id="@cdktf/provider-gitlab.projectMergeRequestNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectMergeRequestNote <a name="ProjectMergeRequestNote" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_merge_request_note gitlab_project_merge_request_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectmergerequestnote"

projectmergerequestnote.NewProjectMergeRequestNote(scope Construct, id *string, config ProjectMergeRequestNoteConfig) ProjectMergeRequestNote
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig">ProjectMergeRequestNoteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig">ProjectMergeRequestNoteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal">ResetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha">ResetMergeRequestDiffHeadSha</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetInternal` <a name="ResetInternal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal"></a>

```go
func ResetInternal()
```

##### `ResetMergeRequestDiffHeadSha` <a name="ResetMergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha"></a>

```go
func ResetMergeRequestDiffHeadSha()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectmergerequestnote"

projectmergerequestnote.ProjectMergeRequestNote_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectmergerequestnote"

projectmergerequestnote.ProjectMergeRequestNote_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectmergerequestnote"

projectmergerequestnote.ProjectMergeRequestNote_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectmergerequestnote"

projectmergerequestnote.ProjectMergeRequestNote_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectMergeRequestNote to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectMergeRequestNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_merge_request_note#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectMergeRequestNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId">NoteId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable">Resolvable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute">SystemAttribute</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput">CreatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput">InternalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput">MergeRequestDiffHeadShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput">MergeRequestIidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal">Internal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha">MergeRequestDiffHeadSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid">MergeRequestIid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NoteId`<sup>Required</sup> <a name="NoteId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId"></a>

```go
func NoteId() *f64
```

- *Type:* *f64

---

##### `Resolvable`<sup>Required</sup> <a name="Resolvable" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable"></a>

```go
func Resolvable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute"></a>

```go
func SystemAttribute() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput"></a>

```go
func CreatedAtInput() *string
```

- *Type:* *string

---

##### `InternalInput`<sup>Optional</sup> <a name="InternalInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput"></a>

```go
func InternalInput() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestDiffHeadShaInput`<sup>Optional</sup> <a name="MergeRequestDiffHeadShaInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput"></a>

```go
func MergeRequestDiffHeadShaInput() *string
```

- *Type:* *string

---

##### `MergeRequestIidInput`<sup>Optional</sup> <a name="MergeRequestIidInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput"></a>

```go
func MergeRequestIidInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal"></a>

```go
func Internal() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestDiffHeadSha`<sup>Required</sup> <a name="MergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha"></a>

```go
func MergeRequestDiffHeadSha() *string
```

- *Type:* *string

---

##### `MergeRequestIid`<sup>Required</sup> <a name="MergeRequestIid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid"></a>

```go
func MergeRequestIid() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectMergeRequestNoteConfig <a name="ProjectMergeRequestNoteConfig" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectmergerequestnote"

&projectmergerequestnote.ProjectMergeRequestNoteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Body: *string,
	MergeRequestIid: *f64,
	Project: *string,
	CreatedAt: *string,
	Internal: interface{},
	MergeRequestDiffHeadSha: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body">Body</a></code> | <code>*string</code> | The body of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid">MergeRequestIid</a></code> | <code>*f64</code> | The IID of the merge request to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project">Project</a></code> | <code>*string</code> | The ID or path of the project to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | The creation date of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal">Internal</a></code> | <code>interface{}</code> | Indicates if the merge request note is internal. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha">MergeRequestDiffHeadSha</a></code> | <code>*string</code> | The diff head SHA of the merge request when the note was created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

The body of the merge request note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_merge_request_note#body ProjectMergeRequestNote#body}

---

##### `MergeRequestIid`<sup>Required</sup> <a name="MergeRequestIid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid"></a>

```go
MergeRequestIid *f64
```

- *Type:* *f64

The IID of the merge request to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_merge_request_note#merge_request_iid ProjectMergeRequestNote#merge_request_iid}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or path of the project to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_merge_request_note#project ProjectMergeRequestNote#project}

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt"></a>

```go
CreatedAt *string
```

- *Type:* *string

The creation date of the merge request note.

Using this field requires the token used with the provider to either be an Admin, or hava a Project or Group Owner role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_merge_request_note#created_at ProjectMergeRequestNote#created_at}

---

##### `Internal`<sup>Optional</sup> <a name="Internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal"></a>

```go
Internal interface{}
```

- *Type:* interface{}

Indicates if the merge request note is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_merge_request_note#internal ProjectMergeRequestNote#internal}

---

##### `MergeRequestDiffHeadSha`<sup>Optional</sup> <a name="MergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha"></a>

```go
MergeRequestDiffHeadSha *string
```

- *Type:* *string

The diff head SHA of the merge request when the note was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_merge_request_note#merge_request_diff_head_sha ProjectMergeRequestNote#merge_request_diff_head_sha}

---



