# `projectIntegrationRedmine` Submodule <a name="`projectIntegrationRedmine` Submodule" id="@cdktf/provider-gitlab.projectIntegrationRedmine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationRedmine <a name="ProjectIntegrationRedmine" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_redmine gitlab_project_integration_redmine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer"></a>

```typescript
import { projectIntegrationRedmine } from '@cdktf/provider-gitlab'

new projectIntegrationRedmine.ProjectIntegrationRedmine(scope: Construct, id: string, config: ProjectIntegrationRedmineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig">ProjectIntegrationRedmineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig">ProjectIntegrationRedmineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.resetUseInheritedSettings">resetUseInheritedSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetUseInheritedSettings` <a name="resetUseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.resetUseInheritedSettings"></a>

```typescript
public resetUseInheritedSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationRedmine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isConstruct"></a>

```typescript
import { projectIntegrationRedmine } from '@cdktf/provider-gitlab'

projectIntegrationRedmine.ProjectIntegrationRedmine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformElement"></a>

```typescript
import { projectIntegrationRedmine } from '@cdktf/provider-gitlab'

projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformResource"></a>

```typescript
import { projectIntegrationRedmine } from '@cdktf/provider-gitlab'

projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport"></a>

```typescript
import { projectIntegrationRedmine } from '@cdktf/provider-gitlab'

projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectIntegrationRedmine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationRedmine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationRedmine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_redmine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationRedmine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.issuesUrlInput">issuesUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.newIssueUrlInput">newIssueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectUrlInput">projectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.useInheritedSettingsInput">useInheritedSettingsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.issuesUrl">issuesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.newIssueUrl">newIssueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectUrl">projectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.useInheritedSettings">useInheritedSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuesUrlInput`<sup>Optional</sup> <a name="issuesUrlInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.issuesUrlInput"></a>

```typescript
public readonly issuesUrlInput: string;
```

- *Type:* string

---

##### `newIssueUrlInput`<sup>Optional</sup> <a name="newIssueUrlInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.newIssueUrlInput"></a>

```typescript
public readonly newIssueUrlInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `projectUrlInput`<sup>Optional</sup> <a name="projectUrlInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectUrlInput"></a>

```typescript
public readonly projectUrlInput: string;
```

- *Type:* string

---

##### `useInheritedSettingsInput`<sup>Optional</sup> <a name="useInheritedSettingsInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.useInheritedSettingsInput"></a>

```typescript
public readonly useInheritedSettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuesUrl`<sup>Required</sup> <a name="issuesUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.issuesUrl"></a>

```typescript
public readonly issuesUrl: string;
```

- *Type:* string

---

##### `newIssueUrl`<sup>Required</sup> <a name="newIssueUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.newIssueUrl"></a>

```typescript
public readonly newIssueUrl: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `projectUrl`<sup>Required</sup> <a name="projectUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectUrl"></a>

```typescript
public readonly projectUrl: string;
```

- *Type:* string

---

##### `useInheritedSettings`<sup>Required</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.useInheritedSettings"></a>

```typescript
public readonly useInheritedSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationRedmineConfig <a name="ProjectIntegrationRedmineConfig" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.Initializer"></a>

```typescript
import { projectIntegrationRedmine } from '@cdktf/provider-gitlab'

const projectIntegrationRedmineConfig: projectIntegrationRedmine.ProjectIntegrationRedmineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.issuesUrl">issuesUrl</a></code> | <code>string</code> | The URL to the Redmine project issue to link to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.newIssueUrl">newIssueUrl</a></code> | <code>string</code> | The URL to use to create a new issue in the Redmine project linked to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.project">project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.projectUrl">projectUrl</a></code> | <code>string</code> | The URL to the Redmine project to link to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.useInheritedSettings">useInheritedSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not to inherit default settings. Defaults to false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `issuesUrl`<sup>Required</sup> <a name="issuesUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.issuesUrl"></a>

```typescript
public readonly issuesUrl: string;
```

- *Type:* string

The URL to the Redmine project issue to link to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_redmine#issues_url ProjectIntegrationRedmine#issues_url}

---

##### `newIssueUrl`<sup>Required</sup> <a name="newIssueUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.newIssueUrl"></a>

```typescript
public readonly newIssueUrl: string;
```

- *Type:* string

The URL to use to create a new issue in the Redmine project linked to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_redmine#new_issue_url ProjectIntegrationRedmine#new_issue_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_redmine#project ProjectIntegrationRedmine#project}

---

##### `projectUrl`<sup>Required</sup> <a name="projectUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.projectUrl"></a>

```typescript
public readonly projectUrl: string;
```

- *Type:* string

The URL to the Redmine project to link to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_redmine#project_url ProjectIntegrationRedmine#project_url}

---

##### `useInheritedSettings`<sup>Optional</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.useInheritedSettings"></a>

```typescript
public readonly useInheritedSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_redmine#use_inherited_settings ProjectIntegrationRedmine#use_inherited_settings}

---



