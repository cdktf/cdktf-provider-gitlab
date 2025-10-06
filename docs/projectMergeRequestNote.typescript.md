# `projectMergeRequestNote` Submodule <a name="`projectMergeRequestNote` Submodule" id="@cdktf/provider-gitlab.projectMergeRequestNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectMergeRequestNote <a name="ProjectMergeRequestNote" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note gitlab_project_merge_request_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer"></a>

```typescript
import { projectMergeRequestNote } from '@cdktf/provider-gitlab'

new projectMergeRequestNote.ProjectMergeRequestNote(scope: Construct, id: string, config: ProjectMergeRequestNoteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig">ProjectMergeRequestNoteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig">ProjectMergeRequestNoteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal">resetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha">resetMergeRequestDiffHeadSha</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetInternal` <a name="resetInternal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal"></a>

```typescript
public resetInternal(): void
```

##### `resetMergeRequestDiffHeadSha` <a name="resetMergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha"></a>

```typescript
public resetMergeRequestDiffHeadSha(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct"></a>

```typescript
import { projectMergeRequestNote } from '@cdktf/provider-gitlab'

projectMergeRequestNote.ProjectMergeRequestNote.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement"></a>

```typescript
import { projectMergeRequestNote } from '@cdktf/provider-gitlab'

projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource"></a>

```typescript
import { projectMergeRequestNote } from '@cdktf/provider-gitlab'

projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport"></a>

```typescript
import { projectMergeRequestNote } from '@cdktf/provider-gitlab'

projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectMergeRequestNote to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectMergeRequestNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectMergeRequestNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId">noteId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable">resolvable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute">systemAttribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput">createdAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput">internalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput">mergeRequestDiffHeadShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput">mergeRequestIidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal">internal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha">mergeRequestDiffHeadSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid">mergeRequestIid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `noteId`<sup>Required</sup> <a name="noteId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId"></a>

```typescript
public readonly noteId: number;
```

- *Type:* number

---

##### `resolvable`<sup>Required</sup> <a name="resolvable" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable"></a>

```typescript
public readonly resolvable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* string

---

##### `internalInput`<sup>Optional</sup> <a name="internalInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput"></a>

```typescript
public readonly internalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestDiffHeadShaInput`<sup>Optional</sup> <a name="mergeRequestDiffHeadShaInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput"></a>

```typescript
public readonly mergeRequestDiffHeadShaInput: string;
```

- *Type:* string

---

##### `mergeRequestIidInput`<sup>Optional</sup> <a name="mergeRequestIidInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput"></a>

```typescript
public readonly mergeRequestIidInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal"></a>

```typescript
public readonly internal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestDiffHeadSha`<sup>Required</sup> <a name="mergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha"></a>

```typescript
public readonly mergeRequestDiffHeadSha: string;
```

- *Type:* string

---

##### `mergeRequestIid`<sup>Required</sup> <a name="mergeRequestIid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid"></a>

```typescript
public readonly mergeRequestIid: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectMergeRequestNoteConfig <a name="ProjectMergeRequestNoteConfig" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.Initializer"></a>

```typescript
import { projectMergeRequestNote } from '@cdktf/provider-gitlab'

const projectMergeRequestNoteConfig: projectMergeRequestNote.ProjectMergeRequestNoteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body">body</a></code> | <code>string</code> | The body of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid">mergeRequestIid</a></code> | <code>number</code> | The IID of the merge request to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project">project</a></code> | <code>string</code> | The ID or path of the project to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt">createdAt</a></code> | <code>string</code> | The creation date of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal">internal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the merge request note is internal. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha">mergeRequestDiffHeadSha</a></code> | <code>string</code> | The diff head SHA of the merge request when the note was created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

The body of the merge request note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#body ProjectMergeRequestNote#body}

---

##### `mergeRequestIid`<sup>Required</sup> <a name="mergeRequestIid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid"></a>

```typescript
public readonly mergeRequestIid: number;
```

- *Type:* number

The IID of the merge request to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#merge_request_iid ProjectMergeRequestNote#merge_request_iid}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or path of the project to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#project ProjectMergeRequestNote#project}

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The creation date of the merge request note.

Using this field requires the token used with the provider to either be an Admin, or hava a Project or Group Owner role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#created_at ProjectMergeRequestNote#created_at}

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal"></a>

```typescript
public readonly internal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the merge request note is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#internal ProjectMergeRequestNote#internal}

---

##### `mergeRequestDiffHeadSha`<sup>Optional</sup> <a name="mergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha"></a>

```typescript
public readonly mergeRequestDiffHeadSha: string;
```

- *Type:* string

The diff head SHA of the merge request when the note was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#merge_request_diff_head_sha ProjectMergeRequestNote#merge_request_diff_head_sha}

---



